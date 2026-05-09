import { TrendingUp, TrendingDown, DollarSign, Briefcase, Users, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const monthlyData = [
  { month: 'Jan', revenue: 45000, users: 1200 },
  { month: 'Feb', revenue: 52000, users: 1450 },
  { month: 'Mar', revenue: 48000, users: 1580 },
  { month: 'Apr', revenue: 61000, users: 1820 },
  { month: 'May', revenue: 68000, users: 2100 },
  { month: 'Jun', revenue: 75000, users: 2450 },
];

const fundingData = [
  { name: 'Seed', value: 500000, color: '#007BFF' },
  { name: 'Series A', value: 2000000, color: '#00C9FF' },
  { name: 'Series B', value: 5000000, color: '#4CAF50' },
];

export function Dashboard() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1>Hello, Shivansh 👋</h1>
        <p className="text-muted-foreground">Here's your startup overview</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-3">
            <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Success Probability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span style={{ fontSize: '32px', fontWeight: '700' }}>78%</span>
                <span className="flex items-center gap-1 text-green-600" style={{ fontSize: '14px' }}>
                  <TrendingUp className="w-4 h-4" />
                  12%
                </span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-3">
            <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Total Funding</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span style={{ fontSize: '32px', fontWeight: '700' }}>$7.5M</span>
                <span className="flex items-center gap-1 text-green-600" style={{ fontSize: '14px' }}>
                  <TrendingUp className="w-4 h-4" />
                  8%
                </span>
              </div>
              <div className="flex gap-2 text-muted-foreground" style={{ fontSize: '12px' }}>
                <DollarSign className="w-4 h-4" />
                <span>Series B completed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-3">
            <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span style={{ fontSize: '32px', fontWeight: '700' }}>12</span>
                <span className="flex items-center gap-1 text-green-600" style={{ fontSize: '14px' }}>
                  <TrendingUp className="w-4 h-4" />
                  3
                </span>
              </div>
              <div className="flex gap-2 text-muted-foreground" style={{ fontSize: '12px' }}>
                <Briefcase className="w-4 h-4" />
                <span>8 in progress, 4 completed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-3">
            <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Team Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span style={{ fontSize: '32px', fontWeight: '700' }}>92%</span>
                <span className="flex items-center gap-1 text-red-600" style={{ fontSize: '14px' }}>
                  <TrendingDown className="w-4 h-4" />
                  2%
                </span>
              </div>
              <div className="flex gap-2 text-muted-foreground" style={{ fontSize: '12px' }}>
                <Users className="w-4 h-4" />
                <span>24 members, 2 on leave</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue & User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#007BFF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#007BFF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888" style={{ fontSize: '12px' }} />
                <YAxis stroke="#888" style={{ fontSize: '12px' }} />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#007BFF" fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Funding Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fundingData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {fundingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `$${(value / 1000000).toFixed(1)}M`} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights Panel */}
      <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            AI-Based Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span style={{ fontSize: '14px' }} className="text-muted-foreground">Growth Trend</span>
              </div>
              <p>Your revenue is growing 15% faster than industry average</p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span style={{ fontSize: '14px' }} className="text-muted-foreground">Funding Alert</span>
              </div>
              <p>Consider Series C round in next 6-8 months based on growth rate</p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span style={{ fontSize: '14px' }} className="text-muted-foreground">Team Insight</span>
              </div>
              <p>Team productivity increased by 18% this quarter</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
