import { useState } from 'react';
import { DollarSign, TrendingUp, AlertTriangle, Plus, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Badge } from '../ui/badge';

const fundingRounds = [
  { round: 'Seed', amount: 500000, date: '2023-01', investors: 3 },
  { round: 'Series A', amount: 2000000, date: '2023-08', investors: 5 },
  { round: 'Series B', amount: 5000000, date: '2024-06', investors: 8 },
];

const burnRateData = [
  { month: 'Jan', burn: 120000, revenue: 45000 },
  { month: 'Feb', burn: 135000, revenue: 52000 },
  { month: 'Mar', burn: 142000, revenue: 48000 },
  { month: 'Apr', burn: 155000, revenue: 61000 },
  { month: 'May', burn: 168000, revenue: 68000 },
  { month: 'Jun', burn: 175000, revenue: 75000 },
];

const cashFlowData = [
  { month: 'Jan', balance: 6500000 },
  { month: 'Feb', balance: 6417000 },
  { month: 'Mar', balance: 6323000 },
  { month: 'Apr', balance: 6229000 },
  { month: 'May', balance: 6129000 },
  { month: 'Jun', balance: 6029000 },
];

export function FundingFinance() {
  const [isOpen, setIsOpen] = useState(false);
  const totalFunding = fundingRounds.reduce((acc, r) => acc + r.amount, 0);
  const currentBalance = cashFlowData[cashFlowData.length - 1].balance;
  const monthlyBurn = burnRateData[burnRateData.length - 1].burn - burnRateData[burnRateData.length - 1].revenue;
  const runway = Math.floor(currentBalance / monthlyBurn);

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Funding & Finance Tracking</h1>
          <p className="text-muted-foreground">Monitor your funding rounds, burn rate, and runway</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gradient-primary gap-2">
              <Plus className="w-4 h-4" />
              Add Funding Record
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Funding Record</DialogTitle>
              <DialogDescription>Record a new funding round</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Funding Round</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select round type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seed">Seed</SelectItem>
                    <SelectItem value="series-a">Series A</SelectItem>
                    <SelectItem value="series-b">Series B</SelectItem>
                    <SelectItem value="series-c">Series C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Amount (USD)</Label>
                <Input type="number" placeholder="1000000" />
              </div>
              <div className="space-y-2">
                <Label>Date</Label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <Label>Number of Investors</Label>
                <Input type="number" placeholder="5" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button className="gradient-primary" onClick={() => setIsOpen(false)}>Add Record</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {runway <= 6 && (
        <Alert variant="destructive" className="border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertTitle className="text-orange-900">Low Runway Alert</AlertTitle>
          <AlertDescription className="text-orange-800">
            ⚠️ Only {runway} months of runway remaining. Consider raising funds or reducing burn rate.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-3">
            <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Total Funding</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span style={{ fontSize: '28px', fontWeight: '700' }}>
                  ${(totalFunding / 1000000).toFixed(1)}M
                </span>
              </div>
              <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
                Across {fundingRounds.length} rounds
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-3">
            <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Current Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <span style={{ fontSize: '28px', fontWeight: '700' }}>
                ${(currentBalance / 1000000).toFixed(1)}M
              </span>
              <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
                As of June 2024
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-3">
            <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Monthly Burn Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <span style={{ fontSize: '28px', fontWeight: '700' }} className="text-orange-600">
                ${(monthlyBurn / 1000).toFixed(0)}K
              </span>
              <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
                Net burn this month
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-3">
            <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Runway</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <span style={{ fontSize: '28px', fontWeight: '700' }} className={runway <= 6 ? 'text-orange-600' : 'text-green-600'}>
                {runway} mo
              </span>
              <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
                At current burn rate
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Burn Rate vs Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={burnRateData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888" style={{ fontSize: '12px' }} />
                <YAxis stroke="#888" style={{ fontSize: '12px' }} />
                <Tooltip formatter={(value: number) => `$${(value / 1000).toFixed(0)}K`} />
                <Legend />
                <Bar dataKey="burn" fill="#FF9800" name="Burn Rate" radius={[8, 8, 0, 0]} />
                <Bar dataKey="revenue" fill="#4CAF50" name="Revenue" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cash Flow Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cashFlowData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888" style={{ fontSize: '12px' }} />
                <YAxis stroke="#888" style={{ fontSize: '12px' }} />
                <Tooltip formatter={(value: number) => `$${(value / 1000000).toFixed(2)}M`} />
                <Line type="monotone" dataKey="balance" stroke="#007BFF" strokeWidth={3} dot={{ fill: '#007BFF', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Funding History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {fundingRounds.map((round, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <h3>{round.round}</h3>
                    <div className="flex items-center gap-3 text-muted-foreground" style={{ fontSize: '14px' }}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(round.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </span>
                      <span>•</span>
                      <span>{round.investors} investors</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div style={{ fontSize: '24px', fontWeight: '700' }} className="text-green-600">
                    ${(round.amount / 1000000).toFixed(1)}M
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Completed
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
