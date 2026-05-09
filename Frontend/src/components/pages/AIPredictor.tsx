import { useState } from 'react';
import { Brain, Sparkles, CheckCircle, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

interface PredictionResult {
  probability: number;
  achievements: string[];
  suggestions: string[];
  riskIndex: number;
}

export function AIPredictor() {
  const [formData, setFormData] = useState({
    funding_total_usd: '7500000',
    years_active: '3',
    team_size: '24',
    product_launches: '5',
    customer_count: '2450',
    revenue_last_year: '680000',
    market_size: '500000000',
    competitors: '12',
  });

  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePredict = () => {
    setIsLoading(true);
    
    // Simulate AI prediction
    setTimeout(() => {
      const mockPrediction: PredictionResult = {
        probability: 78,
        achievements: [
          'Strong funding trajectory with $7.5M raised',
          'Healthy team size of 24 members',
          'Good product-market fit with 5 launches',
          'Growing customer base of 2,450 users',
          'Positive revenue trend',
        ],
        suggestions: [
          'Consider Series C funding round within next 6-8 months',
          'Expand team by 20% to support growth',
          'Focus on customer retention - aim for 90% retention rate',
          'Diversify revenue streams to reduce risk',
          'Increase marketing spend by 15% for faster acquisition',
        ],
        riskIndex: 32,
      };
      
      setPrediction(mockPrediction);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
          <Brain className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1>AI Success Predictor</h1>
          <p className="text-muted-foreground">Get AI-powered predictions for your startup success</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Startup Parameters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Total Funding (USD)</Label>
                <Input
                  type="number"
                  value={formData.funding_total_usd}
                  onChange={(e) => handleInputChange('funding_total_usd', e.target.value)}
                  placeholder="7500000"
                />
              </div>

              <div className="space-y-2">
                <Label>Years Active</Label>
                <Input
                  type="number"
                  value={formData.years_active}
                  onChange={(e) => handleInputChange('years_active', e.target.value)}
                  placeholder="3"
                />
              </div>

              <div className="space-y-2">
                <Label>Team Size</Label>
                <Input
                  type="number"
                  value={formData.team_size}
                  onChange={(e) => handleInputChange('team_size', e.target.value)}
                  placeholder="24"
                />
              </div>

              <div className="space-y-2">
                <Label>Product Launches</Label>
                <Input
                  type="number"
                  value={formData.product_launches}
                  onChange={(e) => handleInputChange('product_launches', e.target.value)}
                  placeholder="5"
                />
              </div>

              <div className="space-y-2">
                <Label>Customer Count</Label>
                <Input
                  type="number"
                  value={formData.customer_count}
                  onChange={(e) => handleInputChange('customer_count', e.target.value)}
                  placeholder="2450"
                />
              </div>

              <div className="space-y-2">
                <Label>Revenue Last Year (USD)</Label>
                <Input
                  type="number"
                  value={formData.revenue_last_year}
                  onChange={(e) => handleInputChange('revenue_last_year', e.target.value)}
                  placeholder="680000"
                />
              </div>

              <div className="space-y-2">
                <Label>Market Size (USD)</Label>
                <Input
                  type="number"
                  value={formData.market_size}
                  onChange={(e) => handleInputChange('market_size', e.target.value)}
                  placeholder="500000000"
                />
              </div>

              <div className="space-y-2">
                <Label>Number of Competitors</Label>
                <Input
                  type="number"
                  value={formData.competitors}
                  onChange={(e) => handleInputChange('competitors', e.target.value)}
                  placeholder="12"
                />
              </div>
            </div>

            <Button
              onClick={handlePredict}
              disabled={isLoading}
              className="w-full mt-6 gradient-primary gap-2"
            >
              {isLoading ? (
                <>Processing...</>
              ) : (
                <>
                  <Brain className="w-4 h-4" />
                  🔮 Predict Now
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="space-y-4">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle style={{ fontSize: '14px' }} className="text-blue-900">Model Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <span style={{ fontSize: '32px', fontWeight: '700' }} className="text-blue-900">94.2%</span>
                <p className="text-blue-700" style={{ fontSize: '12px' }}>Based on 10,000+ startups</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardHeader className="pb-3">
              <CardTitle style={{ fontSize: '14px' }} className="text-purple-900">AI Models Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge className="bg-purple-600 text-white">GAN</Badge>
                <Badge className="bg-pink-600 text-white ml-2">XGBoost</Badge>
                <p className="text-purple-700" style={{ fontSize: '12px' }}>Hybrid prediction system</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader className="pb-3">
              <CardTitle style={{ fontSize: '14px' }} className="text-green-900">Predictions Made</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <span style={{ fontSize: '32px', fontWeight: '700' }} className="text-green-900">12,547</span>
                <p className="text-green-700" style={{ fontSize: '12px' }}>Total predictions</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Prediction Results */}
      {prediction && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <Card className="border-2 border-primary shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Prediction Results
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${(prediction.probability / 100) * 553} 553`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#007BFF" />
                        <stop offset="100%" stopColor="#00C9FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span style={{ fontSize: '48px', fontWeight: '700' }} className="gradient-text">
                      {prediction.probability}%
                    </span>
                    <span className="text-muted-foreground" style={{ fontSize: '14px' }}>Success Rate</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-green-900">Risk Index</span>
                      <span style={{ fontSize: '24px', fontWeight: '700' }} className="text-green-700">
                        {prediction.riskIndex}%
                      </span>
                    </div>
                    <Progress value={prediction.riskIndex} className="mt-2 h-2" />
                    <p className="text-green-700 mt-2" style={{ fontSize: '12px' }}>Low risk level</p>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-900">Confidence Score</span>
                      <span style={{ fontSize: '24px', fontWeight: '700' }} className="text-blue-700">96%</span>
                    </div>
                    <Progress value={96} className="mt-2 h-2" />
                    <p className="text-blue-700 mt-2" style={{ fontSize: '12px' }}>High confidence</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Collapsible defaultOpen>
                  <Card>
                    <CollapsibleTrigger className="w-full">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-left">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          ✅ Achievements
                        </CardTitle>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent>
                        <ul className="space-y-3">
                          {prediction.achievements.map((achievement, index) => (
                            <li key={index} className="flex gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground" style={{ fontSize: '14px' }}>
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>

                <Collapsible defaultOpen>
                  <Card>
                    <CollapsibleTrigger className="w-full">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-left">
                          <Lightbulb className="w-5 h-5 text-orange-600" />
                          💡 Suggestions
                        </CardTitle>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent>
                        <ul className="space-y-3">
                          {prediction.suggestions.map((suggestion, index) => (
                            <li key={index} className="flex gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground" style={{ fontSize: '14px' }}>
                                {suggestion}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
