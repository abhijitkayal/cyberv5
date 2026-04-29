"use client"


import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { StatCards } from "./component/stats-card"
import { DataTable } from "./component/data-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, Pencil, Trash2 } from "lucide-react"

interface User {
  _id?: string
  id?: number
  name: string
  email: string
  avatar?: string
  role: string
  plan?: string
  billing?: string
  status?: string
  phone?: string
  source?: string
  isActive?: boolean
  clientProfile?: any
  joinedDate?: string
  lastLogin?: string
}

interface UserFormValues {
  name: string
  email: string
  role: string
  plan: string
  billing: string
  status: string
}
export default function UsersPage() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("client")
  const [finalBudget, setFinalBudget] = useState("")
  const [projectName, setProjectName] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [phone, setPhone] = useState("")
  const [source, setSource] = useState("")
  const [validFrom, setValidFrom] = useState("")
  const [validTo, setValidTo] = useState("")
  const [clientStatus, setClientStatus] = useState("active")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [userEditForm, setUserEditForm] = useState<any>({})
  const [isUserSaving, setIsUserSaving] = useState(false)
  const [userEditError, setUserEditError] = useState("")
  const userStatusStyles = {
    active: "border-emerald-200 bg-emerald-500/10 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300",
    inactive: "border-slate-200 bg-slate-500/10 text-slate-700 dark:border-slate-500/30 dark:bg-slate-500/15 dark:text-slate-300",
  }

  // Fetch users from API
  useEffect(() => {
    async function fetchUsers() {
      setLoading(true)
      setError("")
      try {
        const res = await fetch("/api/users", { cache: "no-store" })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || "Failed to load users")
        setUsers(data.users || [])
    console.log("Fetched users:", data.users) // Debug log
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (role === "client" && (!validFrom || !validTo)) {
      setError("Contract starting and ending dates are required for client users.");
      return;
    }
    if (role === "client" && !finalBudget) {
      setError("Final budget is required for client users.");
      return;
    }
    if (role === "client") {
      const fromDate = new Date(validFrom);
      const toDate = new Date(validTo);
      if (fromDate >= toDate) {
        setError("Contract ending date must be after starting date.");
        return;
      }
    }
    setIsSubmitting(true);
    setMessage("");
    setError("");
    try {
      const payload: any = {
        name,
        email,
        password,
        role,
      };
      if (role === "client") {
        payload.finalBudget = finalBudget;
        payload.projectName = projectName;
        payload.projectDescription = projectDescription;
        payload.validFrom = validFrom;
        payload.validTo = validTo;
        payload.source = source;
        payload.status = clientStatus;
      }
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to create user");
      }
      setMessage("User created successfully.");
      setName("");
      setEmail("");
      setPassword("");
      setRole("client");
      setFinalBudget("");
      setProjectName("");
      setProjectDescription("");
      setValidFrom("");
      setValidTo("");
      setSource("");
      setClientStatus("active");
      setOpen(false);
      // reload users
      setUsers(data.users || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleDeleteUser = async (id: string | number) => {
    try {
      const res = await fetch("/api/users", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: id }),
      })
      if (!res.ok) throw new Error("Failed to delete user")
      // Reload users
      setUsers(users => users.filter(u => (u._id || u.id) !== id))
    } catch (err: any) {
      setError(err.message)
    }
  }

  const handleEditUser = (user: User) => {
    setEditingUser(user)
    setUserEditForm({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      source: user.source || "manual-admin",
      status: user.status || (user.isActive ? "active" : "inactive"),
    })
    setUserEditError("")
  }

  const closeUserEdit = () => {
    setEditingUser(null)
    setUserEditForm({})
    setUserEditError("")
  }

  const handleSaveUserEdit = async () => {
    if (!userEditForm.name || !userEditForm.email) {
      setUserEditError("Name and email are required.")
      return
    }

    setIsUserSaving(true)
    setUserEditError("")

    try {
      const response = await fetch("/api/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: editingUser?._id || editingUser?.id,
          name: userEditForm.name,
          email: userEditForm.email,
          phone: userEditForm.phone,
          source: userEditForm.source,
          status: userEditForm.status,
        }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || "Failed to update user")
      }

      setUsers((currentUsers) =>
        currentUsers.map((currentUser) =>
          (currentUser._id || currentUser.id) === (editingUser?._id || editingUser?.id)
            ? { ...currentUser, ...data.user }
            : currentUser
        )
      )

      setMessage("User updated successfully.")
      closeUserEdit()
    } catch (err: any) {
      setUserEditError(err.message || "Failed to save changes")
    } finally {
      setIsUserSaving(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="@container/main px-4 lg:px-6">
        <StatCards />
      </div>
      <div className="@container/main px-4 lg:px-6 mt-8 lg:mt-12">
        <Dialog open={open} onOpenChange={setOpen}>
            <div className="flex justify-end">
          <DialogTrigger asChild>
            <Button className="mb-2 right-0" onClick={() => setOpen(true)}>
              Add User
            </Button>
          </DialogTrigger>
          </div>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle className="sr-only">Create User</DialogTitle>
            </DialogHeader>
            <div className="">
              <Card>
                <CardHeader>
                  <CardTitle>Create User</CardTitle>
                  <CardDescription>
                    Only client and employee roles can be created.
                  </CardDescription>
                </CardHeader>
                <CardContent className="max-h-[60vh] overflow-y-auto pr-2">
                  <form onSubmit={handleSubmit} className="space-y-5 overflow-hidden overflow-y-auto ">

  {/* GRID 2 COLUMN */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* NAME */}
    <div className="space-y-2">
      <Label>Name</Label>
      <Input
        placeholder="Enter full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>

    {/* EMAIL */}
    <div className="space-y-2">
      <Label>Email</Label>
      <Input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>

    {/* PASSWORD */}
    <div className="space-y-2">
      <Label>Password</Label>
      <Input
        type="password"
        placeholder="Minimum 8 characters"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>

    {/* ROLE */}
    <div className="space-y-2">
      <Label>Role</Label>
      <select
        className="h-10 w-full rounded-md border bg-background px-3 text-sm"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="client">Client</option>
        <option value="employee">Employee</option>
      </select>
    </div>
  </div>

  {/* ================= CLIENT SECTION ================= */}
  {role === "client" && (
    <div className="space-y-4 border rounded-lg p-4 bg-muted/30">

      <h3 className="text-sm font-semibold text-muted-foreground">
        Client Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* START DATE */}
        <div className="space-y-2">
          <Label>Start Date</Label>
          <Input
            type="date"
            value={validFrom}
            onChange={(e) => setValidFrom(e.target.value)}
            required
          />
        </div>

        {/* END DATE */}
        <div className="space-y-2">
          <Label>End Date</Label>
          <Input
            type="date"
            value={validTo}
            onChange={(e) => setValidTo(e.target.value)}
            required
          />
        </div>

        {/* BUDGET */}
        <div className="space-y-2">
          <Label>Final Budget</Label>
          <Input
            placeholder="₹ Enter budget"
            value={finalBudget}
            onChange={(e) => setFinalBudget(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
  <Label>Phone</Label>
  <Input
    placeholder="Enter phone number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    required
  />
</div>

        {/* PROJECT NAME */}
        <div className="space-y-2">
          <Label>Project Name</Label>
          <Input
            placeholder="Optional"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Source</Label>
          <Input
            placeholder="Referral, Ads, Instagram, Website"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Status</Label>
          <select
            className="h-10 w-full rounded-md border bg-background px-3 text-sm"
            value={clientStatus}
            onChange={(e) => setClientStatus(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* DESCRIPTION FULL WIDTH */}
      <div className="space-y-2">
        <Label>Project Description</Label>
        <textarea
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          placeholder="Describe project..."
          rows={3}
          className="w-full rounded-md border px-3 py-2 text-sm bg-background"
        />
      </div>
    </div>
  )}

  {/* ================= ALERTS ================= */}
  {message && (
    <div className="text-sm text-green-600 bg-green-100 p-2 rounded">
      {message}
    </div>
  )}

  {error && (
    <div className="text-sm text-red-600 bg-red-100 p-2 rounded">
      {error}
    </div>
  )}

  {/* ================= BUTTON ================= */}
  <Button type="submit" className="w-full h-11 text-base" disabled={isSubmitting}>
    {isSubmitting ? "Creating..." : "Create User"}
  </Button>

</form>
                </CardContent>
              </Card>
            </div>
          </DialogContent>
        </Dialog>
        {/* ========================= USERS TABLE ========================= */}
        <Card className="border border-border bg-card text-card-foreground shadow-sm">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>
              Manage users, roles, and status.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-gray-400">Loading users...</p>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-border/60 bg-background">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border/70 bg-muted/30 text-foreground/80">
                      <th className="py-3 pl-3">Name</th>
                      <th className="py-3">Email</th>
                      <th className="py-3">Role</th>
                      <th className="py-3">Source</th>
                      <th className="py-3">Status</th>
                      <th className="py-3 pr-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr
                        key={user._id || user.id}
                        className="border-b border-border/60 align-top hover:bg-muted/40 transition-colors"
                      >
                        <td className="py-3 pl-3">{user.name}</td>
                        <td className="py-3">{user.email}</td>
                        <td className="py-3 uppercase">{user.role}</td>
                        <td className="py-3">
                          {(() => {
                            const sourceValue = String(user.source || "manual-admin").trim()
                            const isLeadSource = sourceValue.toLowerCase() === "lead-conversion"
                            const isManualSource = sourceValue.toLowerCase() === "manual-admin"
                            const sourceLabel = isLeadSource ? "From Lead" : isManualSource ? "Manual" : sourceValue

                            return (
                              <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${
                                isLeadSource
                                  ? "border-emerald-200 bg-emerald-500/10 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300"
                                  : isManualSource
                                    ? "border-blue-200 bg-blue-500/10 text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/15 dark:text-blue-300"
                                    : "border-slate-200 bg-slate-500/10 text-slate-700 dark:border-slate-500/30 dark:bg-slate-500/15 dark:text-slate-300"
                              }`}>
                                {sourceLabel || "Manual"}
                              </span>
                            )
                          })()}
                        </td>
                        <td className="py-3">
                          {(() => {
                            const status = String(user.status || (user.isActive ? "active" : "inactive")).toLowerCase()
                            const statusClass = userStatusStyles[status] || userStatusStyles.inactive
                            return (
                              <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold capitalize ${statusClass}`}>
                                {status}
                              </span>
                            )
                          })()}
                        </td>
                        <td className="py-3 pr-3 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-36 border-border bg-popover text-popover-foreground">
                              <DropdownMenuItem onClick={() => handleEditUser(user)} className="cursor-pointer gap-2">
                                <Pencil className="h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleDeleteUser(user._id || user.id)} className="cursor-pointer gap-2 text-red-500 focus:text-red-500">
                                <Trash2 className="h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {users.length === 0 && (
                  <p className="text-gray-400 mt-3">No users found</p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {editingUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <Card className="w-full max-w-xl max-h-[90vh] overflow-y-auto border border-border bg-card text-card-foreground shadow-2xl">
            <CardHeader>
              <CardTitle>Edit User</CardTitle>
              <CardDescription>Update the selected user details.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input value={userEditForm.name || ""} onChange={(e) => setUserEditForm({ ...userEditForm, name: e.target.value })} />
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" value={userEditForm.email || ""} onChange={(e) => setUserEditForm({ ...userEditForm, email: e.target.value })} />
                </div>

                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input value={userEditForm.phone || ""} onChange={(e) => setUserEditForm({ ...userEditForm, phone: e.target.value })} />
                </div>

                <div className="space-y-2">
                  <Label>Status</Label>
                  <select
                    className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground"
                    value={userEditForm.status || "active"}
                    onChange={(e) => setUserEditForm({ ...userEditForm, status: e.target.value })}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Source</Label>
                <Input value={userEditForm.source || ""} onChange={(e) => setUserEditForm({ ...userEditForm, source: e.target.value })} />
              </div>

              {userEditError && <p className="text-sm text-red-400">{userEditError}</p>}

              <div className="flex gap-2 pt-2">
                <Button variant="outline" className="flex-1" onClick={closeUserEdit} disabled={isUserSaving}>
                  Cancel
                </Button>
                <Button className="flex-1" onClick={handleSaveUserEdit} disabled={isUserSaving}>
                  {isUserSaving ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}