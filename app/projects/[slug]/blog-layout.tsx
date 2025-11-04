'use client'

import { oswald, poppins } from '@/app/fonts'
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Sidebar,
  SidebarContainer,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarToggleButton
} from '@/components/aspect-ui'
import {
  Calendar,
  Code,
  ExternalLink,
  Github,
  Info,
  Settings,
  Star,
  Users,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface ProjectData {
  title: string
  short_description: string
  description: string[]
  project_type: string[]
  project_status: string
  date_started: string
  tech_use: string[]
  project_url: string
  github_repo: string
  key_features: Array<{ title: string; desc: string }>
  tags: string[]
  team_size: number
  role: string
}

export default function BlogLayout({ data }: { data: ProjectData }) {
  const [activeSection, setActiveSection] = useState('overview')

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'features', label: 'Features', icon: Zap },
    { id: 'tech-stack', label: 'Tech Stack', icon: Code },
    { id: 'details', label: 'Project Details', icon: Settings }
  ]

  return (
    <div className={`flex ${poppins.className}`}>
      {/* Sidebar */}
      <Sidebar className='border-border h-auto w-80 border-r bg-inherit p-6'>
        <SidebarHeader className='mb-8'>
          <h1
            className={`text-text mb-2 flex items-center justify-between text-2xl font-bold ${oswald.className}`}
          >
            <span>{data.title}</span>
            <SidebarToggleButton className='lg:hidden' />
          </h1>
          <div className='mb-4 flex flex-wrap gap-2'>
            {data.project_type.map(type => (
              <Badge key={type} variant='outline' className='text-xs'>
                {type}
              </Badge>
            ))}
          </div>
          <Badge variant={'default'} className='mb-4'>
            {data.project_status}
          </Badge>
        </SidebarHeader>

        <SidebarContainer className='space-y-2'>
          {sidebarItems.map(item => {
            const Icon = item.icon
            return (
              <SidebarItem
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`${activeSection === item.id
                    ? 'bg-primary-foreground text-primary'
                    : ''
                  }`}
              >
                <Icon className='h-5 w-5' />
                {item.label}
              </SidebarItem>
            )
          })}
        </SidebarContainer>

        {/* <Divider className="my-6" /> */}

        <SidebarFooter>
          <div className='space-y-4'>
            <Button variant='outline' className='w-full text-text'>
              <a
                href={data.project_url}
                target='_blank'
                className='flex items-center gap-3 text-text'
                rel='noopener noreferrer'
              >
                <ExternalLink className='h-4 w-4' />
                View Live Demo
              </a>
            </Button>
            <Button variant='outline' className='w-full'>
              <a
                href={data.github_repo}
                target='_blank'
                className='flex items-center gap-3 text-text'
                rel='noopener noreferrer'
              >
                <Github className='mr-2 h-4 w-4' />
                View Source
              </a>
            </Button>
          </div>
          <div className='mt-8 hidden rounded-lg p-4'>
            <h3 className='mb-2 font-semibold text-gray-900'>Quick Stats</h3>
            <div className='text-text-muted space-y-2 text-sm'>
              <div className='flex justify-between'>
                <span>Started:</span>
                <span>{new Date(data.date_started).toLocaleDateString()}</span>
              </div>
              <div className='flex justify-between'>
                <span>Team Size:</span>
                <span>{data.team_size}</span>
              </div>
              <div className='flex justify-between'>
                <span>Technologies:</span>
                <span>{data.tech_use.length}</span>
              </div>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>

      {/* Main Content */}
      <div className='flex-1 p-8 text-base'>
        {activeSection === 'overview' && (
          <div className='max-w-4xl'>
            <div className='mb-8'>
              <SectionTitle title='Project Overview' />
              <p className='text-text-muted mb-6 leading-relaxed'>
                {data.short_description}
              </p>
            </div>

            <Card className='mb-8'>
              <CardHeader>
                <CardTitle className={`text-xl ${oswald.className}`}>
                  About This Project
                </CardTitle>
              </CardHeader>
              <CardContent className='prose max-w-none space-y-4'>
                <ul className='space-y-2'>
                  {data.description.map((item, index) => (
                    <li key={index} className='text-text-muted'>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <Card>
                <CardHeader>
                  <CardTitle
                    className={`flex items-center gap-2 ${oswald.className}`}
                  >
                    <Calendar className='h-5 w-5' />
                    Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-2 text-sm'>
                    <div className='flex justify-between'>
                      <span className='text-text-muted'>Started:</span>
                      <span className='font-medium'>
                        {new Date(data.date_started).toLocaleDateString()}
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-text-muted'>Status:</span>
                      <Badge variant='default'>{data.project_status}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle
                    className={`flex items-center gap-2 ${oswald.className}`}
                  >
                    <Users className='h-5 w-5' />
                    Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-2 text-sm'>
                    <div className='flex justify-between'>
                      <span className='text-text-muted'>Team Size:</span>
                      <span className='font-medium'>
                        {data.team_size} Developer
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-text-muted'>Role:</span>
                      <span className='font-medium'>{data.role}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'features' && (
          <div className='max-w-4xl'>
            <div className='mb-8'>
              <SectionTitle title='Key Features' />
              <p className='text-text-muted'>
                Discover what makes {data.title} the perfect choice for your
                next project
              </p>
            </div>

            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
              {data.key_features.map((feature, index) => (
                <Card key={index} className='transition-shadow hover:shadow-md'>
                  <CardHeader>
                    <CardTitle
                      className={`flex items-center gap-3 text-lg ${oswald.className}`}
                    >
                      <div className='bg-primary flex h-10 w-10 items-center justify-center rounded-lg'>
                        <Star className='text-primary-foreground h-5 w-5' />
                      </div>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-text-muted leading-relaxed'>
                      {feature.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'tech-stack' && (
          <div className='max-w-4xl'>
            <div className='mb-8'>
              <SectionTitle title='Technology Stack' />
              <p className='text-text-muted'>
                Built with modern technologies for optimal performance and
                developer experience
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className={`text-lg ${oswald.className}`}>
                  Technologies Used
                </CardTitle>
                <CardDescription>
                  The following technologies power this project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                  {data.tech_use.map(tech => (
                    <div
                      key={tech}
                      className='bg-bg-light flex items-center gap-3 rounded-lg p-3'
                    >
                      <Code className='text-primary h-5 w-5' />
                      <span className='text-text font-medium whitespace-nowrap'>
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className='mt-6'>
              <CardHeader>
                <CardTitle className={`text-lg ${oswald.className}`}>
                  Tags
                </CardTitle>
                <CardDescription>
                  Keywords and categories associated with this project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2'>
                  {data.tags.map(tag => (
                    <Badge key={tag} variant='outline' className='px-3 py-1'>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'details' && (
          <div className='max-w-4xl'>
            <div className='mb-8'>
              <SectionTitle title='Project Details' />
              <p className='text-text-muted'>
                Comprehensive information about the project structure and
                implementation
              </p>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <Card>
                <CardHeader>
                  <CardTitle className={`text-lg ${oswald.className}`}>
                    Project Information
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div>
                    <label className='text-text text-sm font-medium'>
                      Project Type
                    </label>
                    <div className='mt-1 flex gap-2'>
                      {data.project_type.map(type => (
                        <Badge key={type} variant='outline'>
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className='text-text text-sm font-medium'>
                      Status
                    </label>
                    <div className='mt-1'>
                      <Badge variant='default'>{data.project_status}</Badge>
                    </div>
                  </div>
                  <div>
                    <label className='text-text text-sm font-medium'>
                      Start Date
                    </label>
                    <p className='text-text-muted mt-1'>
                      {new Date(data.date_started).toLocaleDateString()}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className={`text-lg ${oswald.className}`}>
                    Links & Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div>
                    <label className='text-text text-sm font-medium'>
                      Live Demo
                    </label>
                    <div className='mt-1'>
                      <a
                        href={data.project_url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 text-primaryColor hover:text-primaryColor/80'
                      >
                        {data.project_url}
                        <ExternalLink className='h-4 w-4' />
                      </a>
                    </div>
                  </div>
                  <div>
                    <label className='text-text text-sm font-medium'>
                      Source Code
                    </label>
                    <div className='mt-1'>
                      <a
                        href={data.github_repo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 text-primaryColor hover:text-primaryColor/80'
                      >
                        GitHub Repository
                        <Github className='h-4 w-4' />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className='mb-4 flex items-center gap-2'>
      <SidebarToggleButton className='lg:hidden' />
      <h2 className={`text-text text-3xl font-bold ${oswald.className}`}>
        {title}
      </h2>
    </div>
  )
}
