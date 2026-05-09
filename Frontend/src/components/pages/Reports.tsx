import { useState } from 'react';
import { FileDown, Filter, Calendar, FileText, TrendingUp, DollarSign, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';

const reportTypes = [
  {
    id: 'performance',
    name: 'Performance Report',
    description: 'Complete overview of startup metrics and KPIs',
    icon: TrendingUp,
    lastGenerated: '2024-10-14',
    size: '2.4 MB',
  },
  {
    id: 'financial',
    name: 'Financial Report',
    description: 'Funding, burn rate, revenue, and cash flow analysis',
    icon: DollarSign,
    lastGenerated: '2024-10-14',
    size: '1.8 MB',
  },
  {
    id: 'team',
    name: 'Team Analytics',
    description: 'Team performance, contribution, and health metrics',
    icon: Users,
    lastGenerated: '2024-10-13',
    size: '1.2 MB',
  },
  {
    id: 'prediction',
    name: 'AI Prediction Report',
    description: 'Success probability and recommendations',
    icon: FileText,
    lastGenerated: '2024-10-14',
    size: '3.1 MB',
  },
];

const exportFormats = [
  { value: 'pdf', label: 'PDF Document', icon: '📄' },
  { value: 'csv', label: 'CSV Spreadsheet', icon: '📊' },
  { value: 'excel', label: 'Excel Workbook', icon: '📈' },
  { value: 'json', label: 'JSON Data', icon: '🔗' },
];

const timeRanges = [
  { value: 'week', label: 'Last Week' },
  { value: 'month', label: 'Last Month' },
  { value: 'quarter', label: 'Last Quarter' },
  { value: 'year', label: 'Last Year' },
  { value: 'all', label: 'All Time' },
];

export function Reports() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('month');
  const [selectedFormat, setSelectedFormat] = useState('pdf');

  const handleDownload = (reportType: string) => {
    // Simulate download
    console.log(`Downloading ${reportType} as ${selectedFormat} for ${selectedTimeRange}`);
  };

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1>Reports & Downloads</h1>
        <p className="text-muted-foreground">Export analytics and prediction reports</p>
      </div>

      {/* Filter Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Report Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '14px' }}>
                <Calendar className="w-4 h-4" />
                Time Range
              </label>
              <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {timeRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '14px' }}>
                <FileDown className="w-4 h-4" />
                Export Format
              </label>
              <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {exportFormats.map((format) => (
                    <SelectItem key={format.value} value={format.value}>
                      {format.icon} {format.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportTypes.map((report) => {
          const Icon = report.icon;
          return (
            <Card key={report.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle style={{ fontSize: '18px' }}>{report.name}</CardTitle>
                      <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
                        {report.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-muted-foreground" style={{ fontSize: '13px' }}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Last generated: {report.lastGenerated}</span>
                  </div>
                  <Badge variant="outline">{report.size}</Badge>
                </div>

                <Separator />

                <div className="flex gap-2">
                  <Button
                    className="flex-1 gradient-primary gap-2"
                    onClick={() => handleDownload(report.id)}
                  >
                    <FileDown className="w-4 h-4" />
                    Download {selectedFormat.toUpperCase()}
                  </Button>
                  <Button variant="outline">Preview</Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Stats */}
      <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
        <CardHeader>
          <CardTitle>Export Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div style={{ fontSize: '32px', fontWeight: '700' }} className="text-primary">
                147
              </div>
              <p className="text-muted-foreground" style={{ fontSize: '13px' }}>Total Reports</p>
            </div>
            <div className="text-center">
              <div style={{ fontSize: '32px', fontWeight: '700' }} className="text-primary">
                12
              </div>
              <p className="text-muted-foreground" style={{ fontSize: '13px' }}>This Month</p>
            </div>
            <div className="text-center">
              <div style={{ fontSize: '32px', fontWeight: '700' }} className="text-primary">
                89 MB
              </div>
              <p className="text-muted-foreground" style={{ fontSize: '13px' }}>Total Size</p>
            </div>
            <div className="text-center">
              <div style={{ fontSize: '32px', fontWeight: '700' }} className="text-primary">
                PDF
              </div>
              <p className="text-muted-foreground" style={{ fontSize: '13px' }}>Most Used</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scheduled Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Scheduled Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <div>Weekly Performance Report</div>
                  <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
                    Every Monday at 9:00 AM
                  </p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-700 border-green-200" variant="outline">
                Active
              </Badge>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <div>Monthly Financial Summary</div>
                  <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
                    First day of each month
                  </p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-700 border-green-200" variant="outline">
                Active
              </Badge>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg opacity-60">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <div>
                  <div>Quarterly Investor Report</div>
                  <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
                    End of each quarter
                  </p>
                </div>
              </div>
              <Badge variant="outline">Paused</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
