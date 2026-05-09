import { Award, Github, Linkedin, Mail, Users, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';

const teamMembers = [
  {
    name: 'Shivansh Vishwakarma',
    role: 'Team Leader',
    expertise: 'Full Stack Development & AI',
    email: 'shivansh@startup.ai',
    color: 'bg-purple-600',
  },
  {
    name: 'Shubham Sahu',
    role: 'Backend Developer',
    expertise: 'Spring Boot & Microservices',
    email: 'shubham@startup.ai',
    color: 'bg-blue-600',
  },
  {
    name: 'Sneha Agarwal',
    role: 'Frontend Developer',
    expertise: 'React & UI/UX Design',
    email: 'sneha.a@startup.ai',
    color: 'bg-green-600',
  },
  {
    name: 'Sneha Sahu',
    role: 'ML Engineer',
    expertise: 'GAN & Deep Learning',
    email: 'sneha.s@startup.ai',
    color: 'bg-orange-600',
  },
  {
    name: 'Suraj Tomar',
    role: 'Data Scientist',
    expertise: 'XGBoost & Data Analytics',
    email: 'suraj@startup.ai',
    color: 'bg-cyan-600',
  },
];

const techStack = [
  { category: 'Frontend', technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'] },
  { category: 'Backend', technologies: ['Spring Boot', 'Java', 'REST API', 'Microservices'] },
  { category: 'AI/ML', technologies: ['Python', 'GAN', 'XGBoost', 'TensorFlow'] },
  { category: 'Database', technologies: ['PostgreSQL', 'Redis', 'MongoDB'] },
];

export function About() {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="p-8 space-y-8">
      {/* Project Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
            <Brain className="w-14 h-14 text-white" />
          </div>
        </div>
        <div>
          <h1 className="mb-2">AI-Powered Startup Management & Success Prediction System</h1>
          <p className="text-muted-foreground" style={{ fontSize: '18px' }}>
            Major Project - Leveraging AI for Startup Success
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <Badge className="bg-blue-600 text-white">React</Badge>
          <Badge className="bg-green-600 text-white">Spring Boot</Badge>
          <Badge className="bg-orange-600 text-white">Python ML</Badge>
          <Badge className="bg-purple-600 text-white">PostgreSQL</Badge>
        </div>
      </div>

      <Separator />

      {/* Project Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Project Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            This comprehensive AI-powered platform revolutionizes startup management by combining advanced machine learning
            models (GAN and XGBoost) with modern web technologies. The system provides real-time analytics, success predictions,
            team management, and financial tracking to help startups make data-driven decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div style={{ fontSize: '32px', fontWeight: '700' }} className="text-blue-600">94.2%</div>
              <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Model Accuracy</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div style={{ fontSize: '32px', fontWeight: '700' }} className="text-green-600">10+</div>
              <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Features</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div style={{ fontSize: '32px', fontWeight: '700' }} className="text-purple-600">Full Stack</div>
              <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Architecture</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            Development Team
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <Avatar className="w-20 h-20">
                      <AvatarFallback className={`${member.color} text-white`} style={{ fontSize: '20px' }}>
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3>{member.name}</h3>
                      <Badge variant="outline" className="mt-1">
                        {member.role}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
                      {member.expertise}
                    </p>
                    <div className="flex gap-3 pt-2">
                      <button className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <Mail className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors">
                        <Github className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <Linkedin className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tech Stack */}
      <Card>
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-primary">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="px-3 py-2 bg-accent rounded-lg text-center hover:bg-accent/70 transition-colors"
                      style={{ fontSize: '14px' }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mentor Section */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle>Project Mentor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="bg-purple-600 text-white" style={{ fontSize: '20px' }}>
                PM
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-purple-900">Project Mentor</h3>
              <p className="text-purple-700" style={{ fontSize: '14px' }}>
                Department of Computer Science & Engineering
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-muted-foreground" style={{ fontSize: '14px' }}>
        <p>© 2026 AI-Powered Startup Management System. All rights reserved.</p>
        <p className="mt-2">Built with ❤️ by the development team</p>
      </div>
    </div>
  );
}
