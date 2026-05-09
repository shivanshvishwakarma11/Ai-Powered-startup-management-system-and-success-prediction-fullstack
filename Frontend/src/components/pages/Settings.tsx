import { User, Building2, Lock, Bell, Palette, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Textarea } from '../ui/textarea';

export function Settings() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1>Settings</h1>
        <p className="text-muted-foreground">Manage your account and startup preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="startup">Startup</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </CardTitle>
              <CardDescription>Update your personal details and profile picture</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarFallback className="gradient-primary text-white" style={{ fontSize: '32px' }}>
                    SV
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline">Change Photo</Button>
                  <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
                    JPG, PNG or GIF. Max size 2MB
                  </p>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input defaultValue="Shivansh" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input defaultValue="Vishwakarma" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input type="email" defaultValue="shivansh@startup.ai" />
              </div>

              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input defaultValue="+91 98765 43210" />
              </div>

              <div className="space-y-2">
                <Label>Bio</Label>
                <Textarea
                  defaultValue="Team Leader and Founder of AI-Powered Startup Management System"
                  rows={4}
                />
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button className="gradient-primary">Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Startup Tab */}
        <TabsContent value="startup">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Startup Details
              </CardTitle>
              <CardDescription>Manage your startup information and settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Startup Name</Label>
                <Input defaultValue="AI Startup Management Inc." />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Industry</Label>
                  <Input defaultValue="Technology / AI" />
                </div>
                <div className="space-y-2">
                  <Label>Founded Year</Label>
                  <Input defaultValue="2020" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Company Description</Label>
                <Textarea
                  defaultValue="An AI-powered platform for startup management, analytics, and success prediction using advanced machine learning models."
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input defaultValue="Bangalore, India" />
                </div>
                <div className="space-y-2">
                  <Label>Website</Label>
                  <Input defaultValue="https://startup.ai" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3>Tech Stack Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Frontend Framework</Label>
                    <Input defaultValue="React" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label>Backend Framework</Label>
                    <Input defaultValue="Spring Boot" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label>ML Framework</Label>
                    <Input defaultValue="Python (GAN + XGBoost)" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label>Database</Label>
                    <Input defaultValue="PostgreSQL" disabled />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button className="gradient-primary">Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage your password and security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Current Password</Label>
                <Input type="password" placeholder="Enter current password" />
              </div>

              <div className="space-y-2">
                <Label>New Password</Label>
                <Input type="password" placeholder="Enter new password" />
              </div>

              <div className="space-y-2">
                <Label>Confirm New Password</Label>
                <Input type="password" placeholder="Confirm new password" />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3>Two-Factor Authentication</h3>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div>Enable 2FA</div>
                    <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3>Session Management</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div>Current Session</div>
                      <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
                        Chrome on Windows • Active now
                      </p>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div>Mobile App</div>
                      <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
                        iOS • Last active 2 hours ago
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">Revoke</Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button className="gradient-primary">Update Password</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Control how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3>Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div>Performance Alerts</div>
                      <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
                        Get notified about important metric changes
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div>Funding Updates</div>
                      <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
                        Receive updates on funding rounds and investors
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div>Team Activity</div>
                      <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
                        Stay updated on team member activities
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div>Weekly Reports</div>
                      <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
                        Receive weekly performance summaries
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3>Push Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div>AI Insights</div>
                      <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
                        Get instant AI-powered recommendations
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div>Critical Alerts</div>
                      <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
                        Urgent notifications about risks and issues
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline">Reset to Default</Button>
                <Button className="gradient-primary">Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
