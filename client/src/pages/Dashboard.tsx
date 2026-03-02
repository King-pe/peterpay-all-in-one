import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Users, CreditCard, TrendingUp, Loader2 } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  created_at: string;
}

interface Transaction {
  id: number;
  user_id: number;
  amount: number;
  status: string;
  created_at: string;
}

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [users, setUsers] = useState<User[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [usersRes, transactionsRes] = await Promise.all([
          fetch("/api/users"),
          fetch("/api/transactions"),
        ]);

        if (!usersRes.ok || !transactionsRes.ok) {
          throw new Error("Failed to fetch data from server");
        }

        const usersData = await usersRes.json();
        const transactionsData = await transactionsRes.json();

        setUsers(usersData);
        setTransactions(transactionsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalUsers = users.length;
  const totalTransactions = transactions.length;
  const totalAmount = transactions.reduce((sum, t) => sum + (t.amount || 0), 0);
  const completedTransactions = transactions.filter(t => t.status === "completed").length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation("/")}
              className="text-slate-600 hover:text-blue-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div className="h-8 w-px bg-slate-200"></div>
            <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                Total Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">{totalUsers}</div>
              <p className="text-xs text-slate-500 mt-1">Active users in system</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-green-600" />
                Total Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">{totalTransactions}</div>
              <p className="text-xs text-slate-500 mt-1">All recorded transactions</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-purple-600" />
                Total Amount
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">
                {(totalAmount / 100).toLocaleString("en-US", {
                  style: "currency",
                  currency: "TZS",
                })}
              </div>
              <p className="text-xs text-slate-500 mt-1">Total transaction value</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600" />
                Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">{completedTransactions}</div>
              <p className="text-xs text-slate-500 mt-1">Successful transactions</p>
            </CardContent>
          </Card>
        </div>

        {/* Error State */}
        {error && (
          <Card className="border-red-200 bg-red-50 mb-8">
            <CardContent className="pt-6">
              <p className="text-red-700 font-medium">Error: {error}</p>
              <p className="text-red-600 text-sm mt-2">
                Make sure your database is properly configured and the server is running.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-4" />
              <p className="text-slate-600">Loading data from database...</p>
            </div>
          </div>
        )}

        {/* Users Table */}
        {!loading && (
          <>
            <Card className="border-0 shadow-sm mb-8">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-slate-900">Users</CardTitle>
              </CardHeader>
              <CardContent>
                {users.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-slate-500">No users found in the database</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-slate-200">
                          <TableHead className="text-slate-700 font-semibold">ID</TableHead>
                          <TableHead className="text-slate-700 font-semibold">Username</TableHead>
                          <TableHead className="text-slate-700 font-semibold">Email</TableHead>
                          <TableHead className="text-slate-700 font-semibold">Created At</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.id} className="border-slate-100 hover:bg-slate-50">
                            <TableCell className="text-slate-900 font-medium">{user.id}</TableCell>
                            <TableCell className="text-slate-700">{user.username}</TableCell>
                            <TableCell className="text-slate-700">{user.email}</TableCell>
                            <TableCell className="text-slate-600 text-sm">
                              {new Date(user.created_at).toLocaleDateString()}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Transactions Table */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-slate-900">Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                {transactions.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-slate-500">No transactions found in the database</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-slate-200">
                          <TableHead className="text-slate-700 font-semibold">ID</TableHead>
                          <TableHead className="text-slate-700 font-semibold">User ID</TableHead>
                          <TableHead className="text-slate-700 font-semibold">Amount</TableHead>
                          <TableHead className="text-slate-700 font-semibold">Status</TableHead>
                          <TableHead className="text-slate-700 font-semibold">Created At</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {transactions.map((transaction) => (
                          <TableRow key={transaction.id} className="border-slate-100 hover:bg-slate-50">
                            <TableCell className="text-slate-900 font-medium">{transaction.id}</TableCell>
                            <TableCell className="text-slate-700">{transaction.user_id}</TableCell>
                            <TableCell className="text-slate-900 font-semibold">
                              {(transaction.amount / 100).toLocaleString("en-US", {
                                style: "currency",
                                currency: "TZS",
                              })}
                            </TableCell>
                            <TableCell>
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  transaction.status === "completed"
                                    ? "bg-green-100 text-green-700"
                                    : transaction.status === "pending"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-red-100 text-red-700"
                                }`}
                              >
                                {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                              </span>
                            </TableCell>
                            <TableCell className="text-slate-600 text-sm">
                              {new Date(transaction.created_at).toLocaleDateString()}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </main>
    </div>
  );
}

// Helper icon component
function CheckCircle2(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
