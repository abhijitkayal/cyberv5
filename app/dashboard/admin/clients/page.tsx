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
// import { DataTable } from "../admin/clients/component/data-table"
import { toast } from "sonner"
import { ArrowUpRight, Badge, Clock5, CreditCard, MoreVertical, Pencil, TrendingDown, TrendingUp, Trash2, UserCheck, Users } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils'
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
  const [validFrom, setValidFrom] = useState("")
  const [validTo, setValidTo] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // Fetch users from API
const [clients, setClients] = useState<any[]>([]);
  const [loadingClients, setLoadingClients] = useState(true);
  const [stats, setStats] = useState({ totalClients: 0, convertedFromLeads: 0, activeClients: 0 });
  const [editingClient, setEditingClient] = useState<any>(null);
  const [editForm, setEditForm] = useState<any>({});
  const [isSaving, setIsSaving] = useState(false);
  const [editError, setEditError] = useState("");
  const statusStyles = {
    active: "border-emerald-200 bg-emerald-500/10 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300",
    inactive: "border-slate-200 bg-slate-500/10 text-slate-700 dark:border-slate-500/30 dark:bg-slate-500/15 dark:text-slate-300",
  };
  const performanceMetrics = [
    {
      title: "Total Users",
      current: stats.totalClients,
      previous: "-",
      growth: 0,
      icon: Users,
    },
    {
      title: "Converted Users",
      current: stats.convertedFromLeads,
      previous: "-",
      growth: 0,
      icon: CreditCard,
    },
    {
      title: "Active Users",
      current: stats.activeClients,
      previous: "-",
      growth: 0,
      icon: UserCheck,
    },
    {
      title: "Pending Users",
      current: clients.filter((c) => c.status !== "active").length,
      previous: "-",
      growth: 0,
      icon: Clock5,
    },
  ];

  async function loadClients() {
    try {
      setLoadingClients(true);
      const response = await fetch("/api/clients", { cache: "no-store" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load clients");
      }
      console.log("Fetched clients:", data.clients);

      setClients(data.clients || []);

      // Calculate stats
      const total = (data.clients || []).length;
      const converted = (data.clients || []).filter((c) => String(c.source || "").toLowerCase() === "lead-conversion").length;
      const active = (data.clients || []).filter((c) => c.status === "active").length;

      setStats({
        totalClients: total,
        convertedFromLeads: converted,
        activeClients: active,
      });
    } catch (err) {
      toast.error(err.message || "Failed to load clients");
    } finally {
      setLoadingClients(false);
    }
  }

  useEffect(() => {
    loadClients();
  }, []);

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

  const formatDateForInput = (value) => {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return date.toISOString().split("T")[0];
  };

  const handleEditUser = (user: any) => {
    setEditingClient(user._id || user.id);
    setEditForm({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      services: Array.isArray(user.services) ? user.services.join(", ") : "",
      budget: user.budget || "",
      requirement: user.requirement || "",
      validFrom: formatDateForInput(user.validFrom),
      validTo: formatDateForInput(user.validTo),
      finalBudget: user.finalBudget || "",
      projectName: user.projectName || "",
      projectDescription: user.projectDescription || "",
      source: user.source || "manual-admin",
      status: user.status || (user.isActive ? "active" : "inactive"),
    });
  }

  const closeEdit = () => {
    setEditingClient(null);
    setEditForm({});
    setEditError("");
  };

  const handleSaveEdit = async () => {
    if (!editForm?.name || !editForm?.email || !editForm?.phone || !editForm?.finalBudget) {
      setEditError("Name, email, phone, and final budget are required.");
      return;
    }

    if (editForm.validFrom && editForm.validTo) {
      const fromDate = new Date(editForm.validFrom);
      const toDate = new Date(editForm.validTo);
      if (fromDate >= toDate) {
        setEditError("Contract ending date must be after starting date.");
        return;
      }
    }

    setIsSaving(true);
    setEditError("");

    try {
      const response = await fetch("/api/clients", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientId: editingClient,
          name: editForm.name,
          email: editForm.email,
          phone: editForm.phone,
          services: String(editForm.services || "")
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
          budget: editForm.budget,
          requirement: editForm.requirement,
          validFrom: editForm.validFrom,
          validTo: editForm.validTo,
          finalBudget: editForm.finalBudget,
          projectName: editForm.projectName,
          projectDescription: editForm.projectDescription,
          source: editForm.source,
          status: editForm.status,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update client");
      }

      toast.success("Client updated successfully.");
      closeEdit();
      await loadClients();
    } catch (err: any) {
      setEditError(err.message || "Failed to save changes");
    } finally {
      setIsSaving(false);
    }
  }

  const formatDate = (value) => {
    if (!value) return "N/A";
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return "N/A";
    return parsed.toLocaleDateString();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="@container/main px-4 lg:px-6">
        <StatCards />
         {/* <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {performanceMetrics.map((metric, index) => (
                <Card key={index} className='border'>
                  <CardContent className='space-y-4'>
                    <div className='flex items-center justify-between'>
                      <metric.icon className='text-muted-foreground size-6' />
                      <Badge
                        variant='outline'
                        className={cn(
                          metric.growth >= 0
                            ? 'border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950/20 dark:text-green-400'
                            : 'border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/20 dark:text-red-400',
                        )}
                      >
                        {metric.growth >= 0 ? (
                          <>
                            <TrendingUp className='me-1 size-3' />
                            {metric.growth >= 0 ? '+' : ''}
                            {metric.growth}%
                          </>
                        ) : (
                          <>
                            <TrendingDown className='me-1 size-3' />
                            {metric.growth}%
                          </>
                        )}
                      </Badge>
                    </div>
        
                    <div className='space-y-2'>
                      <p className='text-muted-foreground text-sm font-medium'>{metric.title}</p>
                      <div className='text-2xl font-bold'>{metric.current}</div>
                      <div className='text-muted-foreground flex items-center gap-2 text-sm'>
                        <span>from {metric.previous}</span>
                        <ArrowUpRight className='size-3' />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div> */}
      </div>
      <div className="@container/main px-4 lg:px-6 mt-8 lg:mt-12">
       
        {/* ========================= USERS TABLE ========================= */}
        <Card className="border border-border bg-card text-card-foreground shadow-sm">
          <CardHeader className="">
            <CardTitle className="">Clients</CardTitle>
            <CardDescription className="">
              Here present all clients.
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            {loadingClients ? (
              <p className="text-gray-400">Loading clients...</p>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-border/60 bg-background">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border/70 bg-muted/30 text-foreground/80">
                      <th className="py-3 pl-3">Name</th>
                      <th className="py-3">Contact</th>
                      <th className="py-3">Services</th>
                      <th className="py-3">Budget</th>
                      <th className="py-3">Project</th>
                      <th className="py-3">Validity</th>
                      <th className="py-3">Source</th>
                      <th className="py-3">Requirement</th>
                      <th className="py-3">Created / Converted</th>
                      <th className="py-3">Status</th>
                      <th className="py-3 pr-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((user) => {
                      const sourceValue = String(user.source || "manual-admin").trim();
                      const isLeadSource = sourceValue.toLowerCase() === "lead-conversion";
                      const isManualSource = sourceValue.toLowerCase() === "manual-admin";
                      const sourceLabel = isLeadSource
                        ? "From Lead"
                        : isManualSource
                          ? "Manual"
                          : sourceValue;
                      return (
                      <tr
                        key={user._id || user.id}
                        className="border-b border-border/60 align-top hover:bg-muted/40 transition-colors"
                      >
                        <td className="py-3 pl-3">{user.name}</td>
                        <td className="py-3">
                          <p className="text-foreground">{user.email}</p>
                          <p className="text-xs text-muted-foreground">{user.phone || "N/A"}</p>
                        </td>
                        <td className="py-3">
                          <p className="text-xs">{(user.services || []).join(", ") || "N/A"}</p>
                        </td>
                        <td className="py-3">
                          <p className="text-xs font-semibold text-foreground">
                            {user.finalBudget || "N/A"}
                          </p>
                          {user.budget ? <p className="text-xs text-muted-foreground">Initial: {user.budget}</p> : null}
                        </td>
                        <td className="py-3">
                          {user.projectName ? (
                            <>
                              <p className="text-xs font-semibold">{user.projectName}</p>
                              {user.projectDescription ? (
                                <p className="text-xs text-muted-foreground">{user.projectDescription.substring(0, 50)}...</p>
                              ) : null}
                            </>
                          ) : (
                            <span className="text-xs">N/A</span>
                          )}
                        </td>
                        <td className="py-3">
                          <p className="text-xs text-emerald-600 dark:text-emerald-400">
                            {formatDate(user.validFrom)}
                            <br />to<br />
                            {formatDate(user.validTo)}
                          </p>
                        </td>
                        <td className="py-3">
                          <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${
                              isLeadSource
                                ? "bg-emerald-500/20 text-emerald-300"
                                : isManualSource
                                  ? "bg-blue-500/20 text-blue-300"
                                  : "bg-slate-500/20 text-slate-200"
                            }`}
                          >
                            {sourceLabel || "Manual"}
                          </span>
                        </td>
                        <td className="py-3">
                          <p className="text-xs text-muted-foreground">
                            {user.requirement ? `${user.requirement.substring(0, 60)}${user.requirement.length > 60 ? "..." : ""}` : "N/A"}
                          </p>
                        </td>
                        <td className="py-3">
                          <p className="text-xs text-muted-foreground">
                            Created: {user.createdBy?.name || user.createdBy?.email || "N/A"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Converted: {user.convertedBy?.name || user.convertedBy?.email || "N/A"}
                          </p>
                        </td>
                        <td className="py-3">
                          {(() => {
                            const status = String(user.status || (user.isActive ? "active" : "inactive")).toLowerCase();
                            const statusClass = statusStyles[status] || statusStyles.inactive;
                            return (
                              <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold capitalize ${statusClass}`}>
                                {status}
                              </span>
                            );
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
                    );
                  })}
                  </tbody>
                </table>
                {clients.length === 0 && (
                  <p className="text-gray-400 mt-3">No clients found</p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {editingClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-border bg-card text-card-foreground shadow-2xl">
            <CardHeader>
              <CardTitle>Edit Client Information</CardTitle>
              <CardDescription>Update client details</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Name*</Label>
                  <Input
                    value={editForm.name || ""}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label>Email*</Label>
                  <Input
                    type="email"
                    value={editForm.email || ""}
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label>Phone*</Label>
                  <Input
                    value={editForm.phone || ""}
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label>Status</Label>
                  <select
                    className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground"
                    value={editForm.status || "active"}
                    onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div>
                <Label>Services (comma separated)</Label>
                <Input
                  value={editForm.services || ""}
                  onChange={(e) => setEditForm({ ...editForm, services: e.target.value })}
                />
              </div>

              <div>
                <Label>Initial Budget</Label>
                <Input
                  value={editForm.budget || ""}
                  onChange={(e) => setEditForm({ ...editForm, budget: e.target.value })}
                />
              </div>

              <div>
                <Label>Final Budget*</Label>
                <Input
                  value={editForm.finalBudget || ""}
                  onChange={(e) => setEditForm({ ...editForm, finalBudget: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label>Project Name (optional)</Label>
                <Input
                  value={editForm.projectName || ""}
                  onChange={(e) => setEditForm({ ...editForm, projectName: e.target.value })}
                />
              </div>

              <div>
                <Label>Project Description (optional)</Label>
                <textarea
                  value={editForm.projectDescription || ""}
                  onChange={(e) => setEditForm({ ...editForm, projectDescription: e.target.value })}
                  rows={3}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Contract Valid From</Label>
                  <Input
                    type="date"
                    value={editForm.validFrom || ""}
                    onChange={(e) => setEditForm({ ...editForm, validFrom: e.target.value })}
                  />
                </div>

                <div>
                  <Label>Contract Valid To</Label>
                  <Input
                    type="date"
                    value={editForm.validTo || ""}
                    onChange={(e) => setEditForm({ ...editForm, validTo: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label>Requirement / Notes</Label>
                <textarea
                  value={editForm.requirement || ""}
                  onChange={(e) => setEditForm({ ...editForm, requirement: e.target.value })}
                  rows={2}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
              </div>

              {editError && <p className="text-sm text-red-400">{editError}</p>}

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={closeEdit}
                  disabled={isSaving}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1"
                  onClick={handleSaveEdit}
                  disabled={isSaving}
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}