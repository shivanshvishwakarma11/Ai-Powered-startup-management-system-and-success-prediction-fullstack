import { AlertTriangle, CheckCircle2, TrendingUp, Lightbulb, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

const performanceMetrics = [
  { metric: 'Market Position', score: 78 },
  { metric: 'Team Strength', score: 92 },
  { metric: 'Financial Health', score: 85 },
  { metric: 'Product Quality', score: 88 },
  { metric: 'Customer Satisfaction', score: 90 },
  { metric: 'Innovation', score: 75 },
];

const riskFactors = [
  { factor: 'Market Competition', level: 65, severity: 'medium' },
  { factor: 'Cash Flow', level: 35, severity: 'low' },
  { factor: 'Team Turnover', level: 28, severity: 'low' },
  { factor: 'Product Delays', level: 42, severity: 'medium' },
];

const improvements = [
  { area: 'Sales Pipeline', current: 68, target: 85, priority: 'high' },
  { area: 'Customer Retention', current: 82, target: 90, priority: 'medium' },
  { area: 'Product Features', current: 75, target: 95, priority: 'high' },
  { area: 'Marketing Reach', current: 60, target: 80, priority: 'medium' },
];

const fundingSuggestions = [
  {
    title: 'Series C Preparation',
    description: 'Based on growth trajectory, you\'re ready for Series C in 6-8 months',
    impact: 'high',
    timeline: '6-8 months',
  },
  {
    title: 'Strategic Partnerships',
    description: 'Consider partnerships with enterprise clients for revenue stability',
    impact: 'medium',
    timeline: '3-4 months',
  },
  {
    title: 'Market Expansion',
    description: 'Expand to European markets - 40% lower acquisition costs',
    impact: 'high',
    timeline: '4-6 months',
  },
];

export function Insights() {
  const avgScore = performanceMetrics.reduce((acc, m) => acc + m.score, 0) / performanceMetrics.length;
  const avgRisk = riskFactors.reduce((acc, r) => acc + r.level, 0) / riskFactors.length;

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1>Insights & Recommendations</h1>
        <p className="text-muted-foreground">AI-powered analysis using GAN + XGBoost models</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardHeader className="pb-3">
            <CardTitle style={{ fontSize: '14px' }} className="text-green-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Overall Health Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <span style={{ fontSize: '32px', fontWeight: '700' }} className="text-green-700">
                {avgScore.toFixed(0)}%
              </span>
              <Progress value={avgScore} className="h-2" />
              <p className="text-green-700" style={{ fontSize: '12px' }}>Excellent performance</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
          <CardHeader className="pb-3">
            <CardTitle style={{ fontSize: '14px' }} className="text-orange-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Risk Index
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <span style={{ fontSize: '32px', fontWeight: '700' }} className="text-orange-700">
                {avgRisk.toFixed(0)}%
              </span>
              <Progress value={avgRisk} className="h-2" />
              <p className="text-orange-700" style={{ fontSize: '12px' }}>Moderate risk level</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle style={{ fontSize: '14px' }} className="text-blue-900 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Growth Potential
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <span style={{ fontSize: '32px', fontWeight: '700' }} className="text-blue-700">High</span>
              <div className="flex gap-2">
                <Badge className="bg-blue-600 text-white">Market Ready</Badge>
                <Badge className="bg-cyan-600 text-white">Scalable</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights Alert */}
      <Alert className="border-blue-200 bg-blue-50">
        <Zap className="h-5 w-5 text-blue-600" />
        <AlertTitle className="text-blue-900">AI Insight</AlertTitle>
        <AlertDescription className="text-blue-800">
          Your startup shows strong indicators for success. The GAN model predicts a 78% success probability with high confidence. 
          XGBoost analysis suggests focusing on customer retention and market expansion for optimal growth.
        </AlertDescription>
      </Alert>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Radar Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={performanceMetrics}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="metric" style={{ fontSize: '12px' }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} style={{ fontSize: '10px' }} />
                <Radar name="Score" dataKey="score" stroke="#007BFF" fill="#007BFF" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Factor Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={riskFactors} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" domain={[0, 100]} stroke="#888" style={{ fontSize: '12px' }} />
                <YAxis dataKey="factor" type="category" width={120} stroke="#888" style={{ fontSize: '12px' }} />
                <Tooltip />
                <Bar dataKey="level" radius={[0, 8, 8, 0]}>
                  {riskFactors.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.severity === 'high' ? '#ef4444' : entry.severity === 'medium' ? '#f59e0b' : '#10b981'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Improvement Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Improvement Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {improvements.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <h3>{item.area}</h3>
                    <Badge
                      variant="outline"
                      className={
                        item.priority === 'high'
                          ? 'bg-red-100 text-red-700 border-red-200'
                          : 'bg-yellow-100 text-yellow-700 border-yellow-200'
                      }
                    >
                      {item.priority === 'high' ? '🔴 High Priority' : '🟡 Medium Priority'}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div style={{ fontSize: '14px' }} className="text-muted-foreground">
                      Current: {item.current}% → Target: {item.target}%
                    </div>
                  </div>
                </div>
                <Progress value={(item.current / item.target) * 100} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Funding Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-orange-600" />
            Strategic Funding Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {fundingSuggestions.map((suggestion, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <CardHeader>
                  <CardTitle style={{ fontSize: '16px' }} className="text-purple-900">
                    {suggestion.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-purple-700" style={{ fontSize: '14px' }}>
                    {suggestion.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge
                      className={
                        suggestion.impact === 'high'
                          ? 'bg-purple-600 text-white'
                          : 'bg-purple-400 text-white'
                      }
                    >
                      {suggestion.impact === 'high' ? 'High Impact' : 'Medium Impact'}
                    </Badge>
                    <span className="text-purple-600" style={{ fontSize: '12px' }}>
                      {suggestion.timeline}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
