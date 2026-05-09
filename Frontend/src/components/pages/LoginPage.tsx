import { useState } from 'react';
import { Brain, Mail, Lock, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen gradient-primary flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-2">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <CardTitle>
            <span className="gradient-text">AI-Powered Startup</span>
          </CardTitle>
          <CardDescription>Management & Success Prediction System</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-6">
            <Button
              variant={!isSignup ? 'default' : 'outline'}
              className={`flex-1 ${!isSignup ? 'gradient-primary' : ''}`}
              onClick={() => setIsSignup(false)}
            >
              Login
            </Button>
            <Button
              variant={isSignup ? 'default' : 'outline'}
              className={`flex-1 ${isSignup ? 'gradient-primary' : ''}`}
              onClick={() => setIsSignup(true)}
            >
              Register
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input id="name" placeholder="Enter your name" className="pl-10" />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@example.com" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
              </div>
            </div>

            {!isSignup && (
              <div className="text-right">
                <button type="button" className="text-primary hover:underline" style={{ fontSize: '14px' }}>
                  Forgot Password?
                </button>
              </div>
            )}

            <Button type="submit" className="w-full gradient-primary">
              {isSignup ? 'Create Account' : 'Login'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
