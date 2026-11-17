import executivePortrait from '../assets/images/portrait_executive_1794896324556.jpg';
import hrLeaderPortrait from '../assets/images/portrait_hr_leader_1794896324817.jpg';
import managerPortrait from '../assets/images/portrait_manager_1794896325993.jpg';
import employeePortrait from '../assets/images/portrait_employee_1794896326215.jpg';
import heroCenterPortrait from '../assets/images/portrait_hero_center_1794896327570.jpg';

export const PORTRAITS = {
  executive: executivePortrait,
  hrLeader: hrLeaderPortrait,
  manager: managerPortrait,
  employee: employeePortrait,
  heroCenter: heroCenterPortrait,
} as const;

export interface WorkplaceRole {
  id: 'executives' | 'hr-leaders' | 'managers' | 'employees';
  label: string;
  image: string;
  quote: string;
  author: string;
  authorTitle: string;
  company: string;
  summary: string;
  grayscaleCollapsed?: boolean;
}

export const WORKPLACE_ROLES: WorkplaceRole[] = [
  {
    id: 'executives',
    label: 'Executives',
    image: PORTRAITS.executive,
    quote:
      'Meridian gives our executive leadership real-time visibility into org health, compensation equity, and goal alignment across every global office without waiting for quarterly spreadsheets.',
    author: 'Marcus Vance',
    authorTitle: 'Chief Operating Officer, Webflow',
    company: 'Webflow',
    summary:
      'Align company-wide OKRs with headcount planning and executive people insights in one unified command view.',
    grayscaleCollapsed: true,
  },
  {
    id: 'hr-leaders',
    label: 'HR Leaders',
    image: PORTRAITS.hrLeader,
    quote:
      '“I love that Meridian makes it so our people leaders don’t have to hunt for information about their teams. Whether they are having one-on-ones, giving feedback, or engaging in a review cycle, our managers have all the context and information they need at their fingertips thanks to Meridian.”',
    author: 'Shveta Malhan',
    authorTitle: 'VP People Insights & Innovation, Dropbox',
    company: 'Dropbox',
    summary:
      'Build and run talent management programs that scale your impact without growing headcount.',
    grayscaleCollapsed: true,
  },
  {
    id: 'managers',
    label: 'Managers',
    image: PORTRAITS.manager,
    quote:
      '“Running weekly 1:1s, tracking direct report goals, and writing thoughtful performance reviews used to take hours across four tools. Meridian keeps every context thread in one calm place.”',
    author: 'Daniel Park',
    authorTitle: 'VP of Engineering, Asana',
    company: 'Asana',
    summary:
      'Equip people managers with structured 1:1 agendas, real-time feedback prompts, and clear team milestones.',
    grayscaleCollapsed: true,
  },
  {
    id: 'employees',
    label: 'Employees',
    image: PORTRAITS.employee,
    quote:
      '“Every employee knows exactly how their daily work connects to company priorities, with transparent career growth paths and timely recognition from peers and leads.”',
    author: 'Hana Takahashi',
    authorTitle: 'Staff Product Designer, Notion',
    company: 'Notion',
    summary:
      'Empower every individual contributor with clear growth tracks, peer recognition, and effortless check-ins.',
    grayscaleCollapsed: true,
  },
];

export interface StrategicTool {
  id: 'performance' | 'time-tracking' | 'analytics' | 'grow' | 'security';
  title: string;
  description: string;
}

export const STRATEGIC_TOOLS: StrategicTool[] = [
  {
    id: 'performance',
    title: 'Performance',
    description:
      'Run performance reviews to align employees on where they meet, exceed, or fall short of their roles’ expectations.',
  },
  {
    id: 'time-tracking',
    title: 'Time Tracking',
    description:
      'Streamline attendance, PTO approvals, and global timesheets with automated payroll-ready exports.',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description:
      'Turn raw HRIS, engagement, and review data into board-ready retention and pay equity dashboards.',
  },
  {
    id: 'grow',
    title: 'Grow',
    description:
      'Map competency frameworks, individual development plans, and career ladders for every department.',
  },
  {
    id: 'security',
    title: 'Security',
    description:
      'Enterprise-grade SOC 2 Type II compliance, granular role permissions, SSO, and audit logging out of the box.',
  },
];

export const ALL_INTEGRATIONS = [
  { name: 'Slack', category: 'Communication', desc: 'Instant praise, check-in reminders, and 1:1 agendas in channels.' },
  { name: 'Discord', category: 'Communication', desc: 'Sync community and team updates directly with workspace feeds.' },
  { name: 'Zoom', category: 'Communication', desc: 'Launch 1:1 meetings and auto-attach collaborative Meridian notes.' },
  { name: 'Microsoft Teams', category: 'Communication', desc: 'Run pulse surveys and review nudges right inside Teams.' },
  { name: 'Notion', category: 'Productivity', desc: 'Embed live OKR trackers and org charts inside company docs.' },
  { name: 'Asana', category: 'Productivity', desc: 'Link project milestones automatically to employee goal progress.' },
  { name: 'Monday.com', category: 'Productivity', desc: 'Mirror sprint deliverables and cross-team KPIs effortlessly.' },
  { name: 'Trello', category: 'Productivity', desc: 'Sync board completions with quarterly personal objectives.' },
  { name: 'Linear', category: 'Engineering', desc: 'Connect engineering cycle velocity to team growth goals.' },
  { name: 'Jira', category: 'Engineering', desc: 'Track key delivery metrics alongside quarterly performance cycles.' },
  { name: 'Webflow', category: 'Talent & Brand', desc: 'Publish open roles from Meridian directly to your careers page.' },
  { name: 'Okta', category: 'Identity & Security', desc: 'Automated SCIM provisioning, deprovisioning, and SAML SSO.' },
];
