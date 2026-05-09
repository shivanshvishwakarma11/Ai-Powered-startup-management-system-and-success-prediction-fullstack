import { Monitor, Server, Brain, Database, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function DFDDiagram() {
  return (
    <Card className="bg-gradient-to-br from-slate-50 to-gray-100">
      <CardHeader>
        <CardTitle>System Architecture - Data Flow Diagram (Level 1)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* User Layer */}
          <div className="flex items-center justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-300 text-center min-w-[200px]">
              <Monitor className="w-12 h-12 mx-auto mb-3 text-gray-600" />
              <div style={{ fontWeight: '600' }}>User Interface</div>
              <div className="text-muted-foreground" style={{ fontSize: '12px' }}>Interacts with system</div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex flex-col items-center">
            <ArrowRight className="w-6 h-6 text-blue-500 rotate-90" />
            <div className="text-blue-600" style={{ fontSize: '12px', fontWeight: '600' }}>HTTP Requests</div>
          </div>

          {/* Frontend Layer */}
          <div className="flex items-center justify-center">
            <div className="bg-blue-500 p-6 rounded-2xl shadow-lg text-white text-center min-w-[280px]">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Monitor className="w-10 h-10" />
                <div>
                  <div style={{ fontSize: '20px', fontWeight: '700' }}>React Frontend</div>
                  <div style={{ fontSize: '12px' }}>TypeScript + Tailwind CSS</div>
                </div>
              </div>
              <div style={{ fontSize: '13px' }} className="mt-2 opacity-90">
                UI Components, State Management, Data Visualization
              </div>
            </div>
          </div>

          {/* Bidirectional Arrow */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-green-500 rotate-90" />
              <div className="text-green-600" style={{ fontSize: '12px', fontWeight: '600' }}>REST API Calls</div>
              <ArrowRight className="w-6 h-6 text-green-500 -rotate-90" />
            </div>
          </div>

          {/* Backend Layer */}
          <div className="flex items-center justify-center">
            <div className="bg-green-600 p-6 rounded-2xl shadow-lg text-white text-center min-w-[280px]">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Server className="w-10 h-10" />
                <div>
                  <div style={{ fontSize: '20px', fontWeight: '700' }}>Spring Boot API</div>
                  <div style={{ fontSize: '12px' }}>Java Backend Server</div>
                </div>
              </div>
              <div style={{ fontSize: '13px' }} className="mt-2 opacity-90">
                Business Logic, Authentication, Data Processing
              </div>
            </div>
          </div>

          {/* Split to ML and Database */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Side - ML Model */}
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <ArrowRight className="w-6 h-6 text-orange-500 rotate-90" />
                <div className="text-orange-600" style={{ fontSize: '12px', fontWeight: '600' }}>Prediction Request</div>
              </div>
              
              <div className="bg-orange-500 p-6 rounded-2xl shadow-lg text-white text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Brain className="w-10 h-10" />
                  <div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>Python ML Model</div>
                    <div style={{ fontSize: '12px' }}>AI/ML Processing</div>
                  </div>
                </div>
                <div style={{ fontSize: '13px' }} className="mt-2 opacity-90">
                  GAN + XGBoost Prediction Engine
                </div>
                <div className="mt-3 pt-3 border-t border-orange-300 space-y-1" style={{ fontSize: '12px' }}>
                  <div>• Success Probability</div>
                  <div>• Risk Analysis</div>
                  <div>• Recommendations</div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <ArrowRight className="w-6 h-6 text-orange-500 -rotate-90" />
                <div className="text-orange-600" style={{ fontSize: '12px', fontWeight: '600' }}>Prediction Results</div>
              </div>
            </div>

            {/* Right Side - Database */}
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-6 h-6 text-gray-500 rotate-90" />
                  <div className="text-gray-600" style={{ fontSize: '12px', fontWeight: '600' }}>Read/Write</div>
                  <ArrowRight className="w-6 h-6 text-gray-500 -rotate-90" />
                </div>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-2xl shadow-lg text-white text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Database className="w-10 h-10" />
                  <div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>PostgreSQL</div>
                    <div style={{ fontSize: '12px' }}>Database Server</div>
                  </div>
                </div>
                <div style={{ fontSize: '13px' }} className="mt-2 opacity-90">
                  Data Storage & Persistence
                </div>
                <div className="mt-3 pt-3 border-t border-gray-500 space-y-1" style={{ fontSize: '12px' }}>
                  <div>• User Data</div>
                  <div>• Startup Metrics</div>
                  <div>• Team Information</div>
                  <div>• Financial Records</div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Flow Back */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-blue-500 -rotate-90" />
              <div className="text-blue-600" style={{ fontSize: '12px', fontWeight: '600' }}>Dashboard Visualization</div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 p-4 bg-white rounded-lg border">
            <div className="text-center mb-3" style={{ fontWeight: '600' }}>Layer Legend</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span style={{ fontSize: '13px' }}>Frontend Layer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-600 rounded"></div>
                <span style={{ fontSize: '13px' }}>Backend Layer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span style={{ fontSize: '13px' }}>AI/ML Layer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-700 rounded"></div>
                <span style={{ fontSize: '13px' }}>Database Layer</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
