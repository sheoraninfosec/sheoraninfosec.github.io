export const PROFILE = {
  name: 'Jigesh Sheoran',
  handle: 'sheoraninfosec',
  tagline: 'Security Researcher · Red & Purple Teaming · Threat Hunter',
  university: 'UPES, Dehradun',
  year: '2027',
  location: 'Dehradun, Uttarakhand, India',
  links: {
    github: 'https://github.com/sheoraninfosec',
    linkedin: 'https://linkedin.com/in/jigesh-sheoran',
    twitter: 'https://twitter.com/sheoraninfosec',
  },
}

export const HELLO_WORDS = [
  { word: 'Hello',      lang: 'English',    rtl: false },
  { word: 'नमस्ते',     lang: 'Hindi',      rtl: false },
  { word: 'Bonjour',    lang: 'French',     rtl: false },
  { word: 'Hola',       lang: 'Spanish',    rtl: false },
  { word: 'Ciao',       lang: 'Italian',    rtl: false },
  { word: 'こんにちは',  lang: 'Japanese',   rtl: false },
  { word: 'مرحبا',      lang: 'Arabic',     rtl: true  },
  { word: 'Olá',        lang: 'Portuguese', rtl: false },
  { word: 'Hallo',      lang: 'German',     rtl: false },
  { word: '안녕하세요',  lang: 'Korean',     rtl: false },
]

export type ResearchItem = {
  id: string
  type: string
  title: string
  date: string
  abstract: string
  keywords: string[]
  language: string
  url: string
  warning: string | null
}

export const RESEARCH: ResearchItem[] = [
  {
    id: 'mindphish',
    type: 'MINOR PROJECT',
    title: 'MindPhish v0.2.0: An NLP-Based Phishing Detection System',
    date: '2024–2025',
    abstract:
      'A 3rd-year minor project applying Natural Language Processing to detect phishing URLs and email content. The system analyses lexical features, URL structure, and semantic patterns using classical ML and transformer-based approaches to classify malicious web resources with high precision and recall.',
    keywords: ['NLP', 'Phishing Detection', 'ML Security', 'Python', 'Jupyter'],
    language: 'Jupyter Notebook',
    url: 'https://github.com/sheoraninfosec/mind_phish_project-0.2.0',
    warning: null,
  },
  {
    id: 'parasite',
    type: 'RED TEAM TOOL',
    title: 'Parasite: A Stealthy Remote Access Toolkit for Adversary Simulation',
    date: '2024',
    abstract:
      'A remote access toolkit written in C++ for red teaming exercises and adversary simulation scenarios. Parasite implements common C2 techniques including process injection, persistence mechanisms, and encrypted communications to simulate real-world threat actor behaviour in authorized lab environments.',
    keywords: ['C++', 'RAT', 'Red Team', 'C2', 'Adversary Simulation'],
    language: 'C++',
    url: 'https://github.com/sheoraninfosec/Parasite',
    warning: 'For authorized research and lab use only',
  },
  {
    id: 'academic-domination',
    type: 'RESOURCE COLLECTION',
    title: 'Academic DOMINATION Resources: Cybersecurity Study Compendium',
    date: 'Ongoing',
    abstract:
      'A curated collection of academic resources, notes, and structured learning paths for cybersecurity students. Covers offensive and defensive security fundamentals, certification guides, CTF writeups, and research paper summaries organized for systematic study.',
    keywords: ['Education', 'CTF', 'Study Notes', 'Resources', 'Cybersecurity'],
    language: 'Markdown',
    url: 'https://github.com/sheoraninfosec/Academic-DOMINATION-Resources',
    warning: null,
  },
  {
    id: 'filedeck',
    type: 'UTILITY TOOL',
    title: 'FileDeck: File Management and Organization Utility',
    date: '2024',
    abstract:
      'A command-line file management utility designed for security professionals to organize research assets, evidence directories, and lab files. Provides batch operations, structured naming conventions, and quick organization workflows.',
    keywords: ['Python', 'CLI', 'File Management', 'Automation'],
    language: 'Python',
    url: 'https://github.com/sheoraninfosec/FileDeck',
    warning: null,
  },
]

export type NoteItem = {
  id: string
  title: string
  topics: string[]
  year: string
  url: string
}

export const NOTES: NoteItem[] = [
  {
    id: 'N-01',
    title: 'TCP/IP Fundamentals for Security',
    topics: ['Packets', 'Handshakes', 'TCP Flags', 'Wireshark Analysis'],
    year: '2024',
    url: '#',
  },
  {
    id: 'N-02',
    title: 'Active Directory Attack Paths',
    topics: ['Kerberoasting', 'AS-REP Roasting', 'DCSync', 'Pass-the-Hash'],
    year: '2024',
    url: '#',
  },
  {
    id: 'N-03',
    title: 'OWASP Top 10 Deep Dive',
    topics: ['Injection', 'XSS', 'SSRF', 'Broken Access Control', 'IDOR'],
    year: '2024',
    url: '#',
  },
  {
    id: 'N-04',
    title: 'Cryptography Essentials',
    topics: ['Symmetric & Asymmetric Encryption', 'PKI', 'TLS/SSL', 'Hashing'],
    year: '2024',
    url: '#',
  },
  {
    id: 'N-05',
    title: 'Linux Privilege Escalation',
    topics: ['SUID Binaries', 'Cron Jobs', 'Kernel Exploits', 'Sudo Misconfig'],
    year: '2024',
    url: '#',
  },
  {
    id: 'N-06',
    title: 'Static Malware Analysis',
    topics: ['PE Headers', 'Strings Analysis', 'YARA Rules', 'Ghidra Basics'],
    year: '2025',
    url: '#',
  },
  {
    id: 'N-07',
    title: 'Threat Hunting with Splunk',
    topics: ['SPL Queries', 'Sigma Rules', 'MITRE ATT&CK Mapping', 'IOC Analysis'],
    year: '2025',
    url: '#',
  },
  {
    id: 'N-08',
    title: 'Incident Response Playbooks',
    topics: ['Triage', 'Containment', 'Forensic Acquisition', 'Root Cause Analysis'],
    year: '2025',
    url: '#',
  },
]

export const TOOLS = [
  {
    name: 'MindPhish',
    description: 'NLP-based phishing URL and email detection system',
    tags: ['Python', 'ML'],
    url: 'https://github.com/sheoraninfosec/mind_phish_project-0.2.0',
  },
  {
    name: 'Parasite',
    description: 'Stealthy RAT for adversary simulation in authorized environments',
    tags: ['C++', 'Red Team'],
    url: 'https://github.com/sheoraninfosec/Parasite',
  },
  {
    name: 'Academic-DOMINATION',
    description: 'Curated cybersecurity study resources and structured notes',
    tags: ['Markdown', 'Education'],
    url: 'https://github.com/sheoraninfosec/Academic-DOMINATION-Resources',
  },
  {
    name: 'FileDeck',
    description: 'CLI file management utility for security research workflows',
    tags: ['Python', 'CLI'],
    url: 'https://github.com/sheoraninfosec/FileDeck',
  },
]

export const SKILLS = [
  {
    category: 'OFFENSIVE SECURITY',
    items: ['Red Teaming', 'Purple Teaming', 'Threat Hunting', 'Adversary Simulation', 'C2 Operations'],
  },
  {
    category: 'LANGUAGES',
    items: ['Python', 'C++', 'Bash', 'PHP', 'Jupyter Notebooks'],
  },
  {
    category: 'TOOLS & PLATFORMS',
    items: ['Metasploit', 'Wireshark', 'Nmap', 'Burp Suite', 'Splunk', 'Ghidra'],
  },
  {
    category: 'CONCEPTS',
    items: ['NLP / ML Security', 'MITRE ATT&CK', 'OWASP Top 10', 'PKI & Cryptography', 'Incident Response'],
  },
  {
    category: 'SYSTEMS',
    items: ['Linux (Kali, Ubuntu)', 'Git & GitHub', 'GitHub Actions', 'VirtualBox'],
  },
]

export const NAV_ITEMS = [
  { id: 'header',   label: 'Title',    number: '0' },
  { id: 'abstract', label: 'Abstract', number: '1' },
  { id: 'research', label: 'Research', number: '2' },
  { id: 'tools',    label: 'Tools',    number: '3' },
  { id: 'notes',    label: 'Notes',    number: '4' },
  { id: 'cv',       label: 'CV',       number: '5' },
  { id: 'contact',  label: 'Contact',  number: '6' },
]
