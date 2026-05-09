import { TrendingUp, TrendingDown, Users, DollarSign, Target, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Badge } from '../ui/badge';

const revenueData = [
  { month: 'Jan', revenue: 45000, growth: 12 },
  { month: 'Feb', revenue: 52000, growth: 15.5 },
  { month: 'Mar', revenue: 48000, growth: -7.7 },
  { month: 'Apr', revenue: 61000, growth: 27.1 },
  { month: 'May', revenue: 68000, growth: 11.5 },
  { month: 'Jun', revenue: 75000, growth: 10.3 },
];

const userGrowthData = [
  { month: 'Jan', users: 1200, active: 980 },
  { month: 'Feb', users: 1450, active: 1190 },
  { month: 'Mar', users: 1580, active: 1310 },
  { month: 'Apr', users: 1820, active: 1520 },
  { month: 'May', users: 2100, active: 1780 },
  { month: 'Jun', users: 2450, active: 2090 },
];

const engagementData = [
  { metric: 'Daily Active', value: 75, trend: 'up' },
  { metric: 'Weekly Active', value: 82, trend: 'up' },
  { metric: 'Monthly Active', value: 88, trend: 'down' },
  { metric: 'Session Time', value: 92, trend: 'up' },
];

const acquisitionData = [
  { channel: 'Organic', users: 1200, cost: 0 },
  { channel: 'Paid Ads', users: 800, cost: 15000 },
  { channel: 'Referral', users: 350, cost: 3000 },
  { channel: 'Social', users: 100, cost: 2000 },
];

export function Analytics() {
  const totalRevenue = revenueData.reduce((acc, d) => acc + d.revenue, 0);
  const totalUsers = userGrowthData[userGrowthData.length - 1].users;
  const activeUsers = userGrowthData[userGrowthData.length - 1].active;
  const avgGrowth = revenueData.reduce((acc, d) => acc + d.growth, 0) / revenueData.length;

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1>Startup Analytics</h1>
        <p className="text-muted-foreground">Key performance indicators and growth metrics</p>
      </div>

      {/* KPI Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Total Revenue</CardTitle>
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span style={{ fontSize: '28px', fontWeight: '700' }}>
                  ${(totalRevenue / 1000).toFixed(0)}K
                </span>
                <Badge className="bg-green-100 text-green-700 border-green-200" variant="outline">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +{avgGrowth.toFixed(1)}%
                </Badge>
              </div>
              <p className="text-muted-foreground" style={{ fontSize: '12px' }}>Last 6 months</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Total Users</CardTitle>
              <Users className="w-5 h-5 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span style={{ fontSize: '28px', fontWeight: '700' }}>{totalUsers.toLocaleString()}</span>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200" variant="outline">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +104%
                </Badge>
              </div>
              <p className="text-muted-foreground" style={{ fontSize: '12px' }}>Since January</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Active Users</CardTitle>
              <Activity className="w-5 h-5 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span style={{ fontSize: '28px', fontWeight: '700' }}>{activeUsers.toLocaleString()}</span>
                <Badge className="bg-purple-100 text-purple-700 border-purple-200" variant="outline">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +113%
                </Badge>
              </div>
              <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
                {((activeUsers / totalUsers) * 100).toFixed(1)}% engagement rate
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Conversion Rate</CardTitle>
              <Target className="w-5 h-5 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span style={{ fontSize: '28px', fontWeight: '700' }}>4.8%</span>
                <Badge className="bg-red-100 text-red-700 border-red-200" variant="outline">
                  <TrendingDown className="w-3 h-3 mr-1" />
                  -0.3%
                </Badge>
              </div>
              <p className="text-muted-foreground" style={{ fontSize: '12px' }}>From last month</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Growth Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#007BFF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#007BFF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888" style={{ fontSize: '12px' }} />
                <YAxis stroke="#888" style={{ fontSize: '12px' }} />
                <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                <Area type="monotone" dataKey="revenue" stroke="#007BFF" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Growth & Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888" style={{ fontSize: '12px' }} />
                <YAxis stroke="#888" style={{ fontSize: '12px' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#007BFF" strokeWidth={2} dot={{ fill: '#007BFF', r: 4 }} name="Total Users" />
                <Line type="monotone" dataKey="active" stroke="#00C9FF" strokeWidth={2} dot={{ fill: '#00C9FF', r: 4 }} name="Active Users" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Customer Acquisition by Channel</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={acquisitionData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#888" style={{ fontSize: '12px' }} />
                <YAxis dataKey="channel" type="category" stroke="#888" style={{ fontSize: '12px' }} />
                <Tooltip />
                <Bar dataKey="users" fill="#007BFF" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {engagementData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground" style={{ fontSize: '14px' }}>
                      {item.metric}
                    </span>
                    <div className="flex items-center gap-2">
                      <span style={{ fontWeight: '600' }}>{item.value}%</span>
                      {item.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-primary transition-all"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
