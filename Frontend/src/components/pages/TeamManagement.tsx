import { useState } from 'react';
import { UserPlus, Edit, Trash2, Mail, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Progress } from '../ui/progress';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  contribution: number;
  performance: number;
}

const initialTeam: TeamMember[] = [
  { id: 1, name: 'Shivansh Vishwakarma', role: 'Team Leader', email: 'shivansh@startup.ai', phone: '+91 98765 43210', contribution: 95, performance: 99 },
  { id: 2, name: 'Shubham Sahu', role: 'Backend Developer', email: 'shubham@startup.ai', phone: '+91 98765 43211', contribution: 88, performance: 92 },
  { id: 3, name: 'Sneha Agarwal', role: 'Frontend Developer', email: 'sneha.a@startup.ai', phone: '+91 98765 43212', contribution: 90, performance: 94 },
  { id: 4, name: 'Sneha Sahu', role: 'ML Engineer', email: 'sneha.s@startup.ai', phone: '+91 98765 43213', contribution: 92, performance: 96 },
  { id: 5, name: 'Suraj Tomar', role: 'Data Scientist', email: 'suraj@startup.ai', phone: '+91 98765 43214', contribution: 87, performance: 90 },
];

const roleColors: Record<string, string> = {
  'Team Leader': 'bg-purple-100 text-purple-800 border-purple-300',
  'Backend Developer': 'bg-blue-100 text-blue-800 border-blue-300',
  'Frontend Developer': 'bg-green-100 text-green-800 border-green-300',
  'ML Engineer': 'bg-orange-100 text-orange-800 border-orange-300',
  'Data Scientist': 'bg-cyan-100 text-cyan-800 border-cyan-300',
  'Designer': 'bg-pink-100 text-pink-800 border-pink-300',
};

export function TeamManagement() {
  const [team, setTeam] = useState<TeamMember[]>(initialTeam);
  const [isOpen, setIsOpen] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  const getPerformanceColor = (performance: number) => {
    if (performance >= 90) return 'text-green-600';
    if (performance >= 75) return 'text-blue-600';
    return 'text-orange-600';
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Team Management</h1>
          <p className="text-muted-foreground">Manage your team members and track their performance</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gradient-primary gap-2">
              <UserPlus className="w-4 h-4" />
              Add Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Team Member</DialogTitle>
              <DialogDescription>Add a new member to your team</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input placeholder="Enter name" />
              </div>
              <div className="space-y-2">
                <Label>Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input placeholder="+91 xxxxx xxxxx" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button className="gradient-primary" onClick={() => setIsOpen(false)}>Add Member</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Total Members</CardTitle>
          </CardHeader>
          <CardContent>
            <span style={{ fontSize: '32px', fontWeight: '700' }}>{team.length}</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Avg Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <span style={{ fontSize: '32px', fontWeight: '700' }}>
              {Math.round(team.reduce((acc, m) => acc + m.performance, 0) / team.length)}%
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Avg Contribution</CardTitle>
          </CardHeader>
          <CardContent>
            <span style={{ fontSize: '32px', fontWeight: '700' }}>
              {Math.round(team.reduce((acc, m) => acc + m.contribution, 0) / team.length)}%
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle style={{ fontSize: '14px' }} className="text-muted-foreground">Active Roles</CardTitle>
          </CardHeader>
          <CardContent>
            <span style={{ fontSize: '32px', fontWeight: '700' }}>
              {new Set(team.map(m => m.role)).size}
            </span>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Contribution</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {team.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="gradient-primary text-white">
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div>{member.name}</div>
                        <div className="text-muted-foreground" style={{ fontSize: '12px' }}>ID: {member.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={roleColors[member.role] || 'bg-gray-100'}>
                      {member.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '12px' }}>
                        <Mail className="w-3 h-3" />
                        {member.email}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '12px' }}>
                        <Phone className="w-3 h-3" />
                        {member.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span style={{ fontSize: '14px' }}>{member.contribution}%</span>
                      </div>
                      <Progress value={member.contribution} className="h-1.5" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={getPerformanceColor(member.performance)} style={{ fontWeight: '600' }}>
                      {member.performance}%
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
