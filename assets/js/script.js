// Data Structure with Enhanced Details and Free/Premium Content
const rolesData = {
    pentester: { title: "Penetration Tester", description: "The elite vanguards who simulate sophisticated cyberattacks to expose critical vulnerabilities in fortified systems.", stages: [{ level: "Initiate", color: "from-emerald-600 to-teal-800", topics: [{ id: "pt-net-basics", title: "Networking Foundations", content: "Master the invisible language of the internet: TCP/IP, Subnetting, and Protocols.", skills: ["TCP/IP Model", "OSI Layers", "Subnetting", "DNS/DHCP", "Wireshark Basics"], resources: [{ name: "Professor Messer Net+", type: "free", link: "https://www.youtube.com/playlist?list=PLG49S3nxzAnlCJiCrOYuRYb6cne864a7G" }, { name: "Cisco Packet Tracer", type: "free", link: "https://www.netacad.com/courses/packet-tracer" }, { name: "CCNA Complete Guide", type: "premium", link: "https://www.udemy.com/topic/cisco-ccna/" }] }, { id: "pt-linux", title: "Linux Command Line", content: "Wield the power of the terminal. File manipulation, permissions, and bash scripting.", skills: ["Bash Scripting", "File Permissions", "Cron Jobs", "Grep/Sed/Awk", "Process Management"], resources: [{ name: "OverTheWire Bandit", type: "free", link: "https://overthewire.org/wargames/bandit/" }, { name: "Linux Journey", type: "free", link: "https://linuxjourney.com/" }, { name: "RHCSA Course", type: "premium", link: "https://www.redhat.com/en/services/training/ex200-red-hat-certified-system-administrator-rhcsa-exam" }] }, { id: "pt-python", title: "Python Weaponization", content: "Script your own tools. Automate attacks and parse large datasets.", skills: ["Requests Library", "Socket Programming", "Scapy", "Argparse", "BeautifulSoup"], resources: [{ name: "Automate the Boring Stuff", type: "free", link: "https://automatetheboringstuff.com/" }, { name: "Black Hat Python", type: "premium", link: "https://nostarch.com/black-hat-python2E" }] }] }, { level: "Adept", color: "from-amber-500 to-orange-700", topics: [{ id: "pt-web-vulns", title: "Web Application Security", content: "Exploit the OWASP Top 10. Injection, Broken Auth, and XSS.", skills: ["SQL Injection", "XSS & CSRF", "IDOR", "Burp Suite", "OWASP Top 10"], resources: [{ name: "PortSwigger Academy", type: "free", link: "https://portswigger.net/web-security" }, { name: "OWASP Juice Shop", type: "free", link: "https://owasp.org/www-project-juice-shop/" }, { name: "eWPT Certification", type: "premium", link: "https://elearnsecurity.com/product/ewpt-certification/" }] }, { id: "pt-net-security", title: "Network Assault", content: "Scanning, enumeration, and exploitation of network services.", skills: ["Nmap Scripting", "Metasploit", "Netcat/Socat", "Hydra", "CVE Analysis"], resources: [{ name: "TryHackMe", type: "free", link: "https://tryhackme.com/" }, { name: "Hack The Box", type: "premium", link: "https://www.hackthebox.com/" }, { name: "TCM Security - PEH", type: "premium", link: "https://academy.tcm-sec.com/p/practical-ethical-hacking-the-complete-course" }] }, { id: "pt-wifi", title: "Wireless Attacks", content: "Breaking WPA2/WPA3 and Enterprise networks.", skills: ["Aircrack-ng", "WPA2 Handshakes", "Evil Twin", "RADIUS", "Hashcat"], resources: [{ name: "Wifi Hacking 101", type: "free", link: "https://www.aircrack-ng.org/doku.php" }, { name: "OSWP", type: "premium", link: "https://www.offsec.com/courses/pen-210/" }] }] }, { level: "Master", color: "from-rose-600 to-red-900", topics: [{ id: "pt-ad", title: "Active Directory Domination", content: "Compromise enterprise environments. Kerberoasting and Golden Tickets.", skills: ["Kerberos", "Bloodhound", "Mimikatz", "GPO Abuse", "DCSync"], resources: [{ name: "Wreath Network (THM)", type: "free", link: "https://tryhackme.com/room/wreath" }, { name: "CRTP Certification", type: "premium", link: "https://www.alteredsecurity.com/adlab" }, { name: "OSCP (OffSec)", type: "premium", link: "https://www.offsec.com/courses/pen-200/" }] }, { id: "pt-red-team", title: "Red Team Operations", content: "Advanced adversary simulation. C2, Evasion, and Physical breaches.", skills: ["C2 Frameworks", "EDR Evasion", "Phishing Campaigns", "Persistence", "OPSEC"], resources: [{ name: "The Red Team Field Manual", type: "premium", link: "https://www.amazon.com/Rtfm-Red-Team-Field-Manual/dp/1494295504" }, { name: "CRTO", type: "premium", link: "https://training.zeropointsecurity.co.uk/courses/red-team-ops" }] }] }, { level: "Legend", color: "from-violet-600 to-fuchsia-900", topics: [{ id: "pt-cloud", title: "Cloud Warfare", content: "Breaching AWS, Azure, and GCP infrastructures.", skills: ["AWS IAM", "S3 Enum", "Azure AD", "Lambda Attacks", "Cloud Pivot"], resources: [{ name: "Hacking the Cloud", type: "free", link: "https://hackingthe.cloud/" }, { name: "CARTP", type: "premium", link: "https://www.alteredsecurity.com/azureadlab" }] }, { id: "pt-exploit", title: "Exploit Development", content: "Crafting custom 0-days. Buffer overflows and heap grooming.", skills: ["Buffer Overflow", "ROP Chaining", "Shellcode", "GDB/WinDbg", "Kernel Exploits"], resources: [{ name: "Corelan Team", type: "free", link: "https://www.corelan.be/" }, { name: "OSEE", type: "premium", link: "https://www.offsec.com/courses/exp-401/" }] }] }] },
    blueTeam: { title: "Blue Team Defender", description: "The guardians of digital fortresses, focusing on hardening, surveillance, and rapid incident response.", stages: [{ level: "Initiate", color: "from-blue-600 to-indigo-800", topics: [{ id: "bt-sys-admin", title: "System Hardening", content: "Secure configuration of Windows and Linux environments.", skills: ["Patch Management", "Least Privilege", "GPO Config", "Linux Hardening", "Service Audit"], resources: [{ name: "Microsoft Learn", type: "free", link: "https://learn.microsoft.com/" }, { name: "CIS Benchmarks", type: "free", link: "https://www.cisecurity.org/cis-benchmarks/" }] }, { id: "bt-net-def", title: "Perimeter Defense", content: "Firewalls, IDS/IPS, and architecture security.", skills: ["Firewall Rules", "Snort/Suricata", "DMZ Design", "VPN Config", "Network Seg."], resources: [{ name: "Palo Alto Beacon", type: "free", link: "https://beacon.paloaltonetworks.com/" }, { name: "Blue Team Labs Online", type: "premium", link: "https://blueteamlabs.online/" }] }] }, { level: "Adept", color: "from-violet-600 to-purple-800", topics: [{ id: "bt-siem", title: "SIEM Operations", content: "Centralized logging and correlation using Splunk or ELK.", skills: ["Log Ingestion", "SPL/KQL", "Dashboarding", "Alert Tuning", "Correlation Rules"], resources: [{ name: "Splunk Fundamentals", type: "free", link: "https://www.splunk.com/en_us/training/free-courses/splunk-fundamentals-1.html" }, { name: "Elastic Security", type: "free", link: "https://www.elastic.co/security" }] }, { id: "bt-ir", title: "Incident Response", content: "The digital paramedic: Triage, Containment, and Eradication.", skills: ["PICERL", "Evidence Collection", "Memory Forensics", "Triage", "Root Cause"], resources: [{ name: "SANS Handler's Diary", type: "free", link: "https://isc.sans.edu/" }, { name: "GCIH Certification", type: "premium", link: "https://www.giac.org/certification/certified-incident-handler-gcih/" }] }] }, { level: "Master", color: "from-fuchsia-600 to-pink-900", topics: [{ id: "bt-threat-hunt", title: "Advanced Threat Hunting", content: "Proactively seeking the adversary within the network.", skills: ["Hypothesis Hunting", "MITRE ATT&CK", "IoC Analysis", "YARA Rules", "Baselining"], resources: [{ name: "ThreatHunting.net", type: "free", link: "https://threathunting.net/" }, { name: "SANS FOR508", type: "premium", link: "https://www.sans.org/cyber-security-courses/advanced-incident-response-threat-hunting-training/" }] }, { id: "bt-malware", title: "Malware Analysis", content: "Dissecting malicious code to understand capabilities.", skills: ["Static Analysis", "Dynamic Analysis", "x64dbg", "IDA Pro", "Sandboxing"], resources: [{ name: "PMAT (TCM Security)", type: "premium", link: "https://academy.tcm-sec.com/p/practical-malware-analysis-triage" }, { name: "GREM", type: "premium", link: "https://www.giac.org/certification/reverse-engineering-malware-grem/" }] }] }, { level: "Legend", color: "from-cyan-600 to-sky-900", topics: [{ id: "bt-zero-trust", title: "Zero Trust Architecture", content: "Never trust, always verify. Redesigning network security.", skills: ["Micro-segmentation", "Identity Access", "SDP", "Continuous Auth", "Policy Engine"], resources: [{ name: "NIST 800-207", type: "free", link: "https://csrc.nist.gov/publications/detail/sp/800-207/final" }, { name: "Forrester Zero Trust", type: "premium", link: "https://www.forrester.com/report/The-Zero-Trust-Architecture-Model/RES137353" }] }, { id: "bt-grc", title: "CISO Leadership", content: "Governance, Risk, and Compliance at the executive level.", skills: ["Risk Assessment", "GDPR/HIPAA", "ISO 27001", "Security Strategy", "Audit Mgmt"], resources: [{ name: "ISACA CISM", type: "premium", link: "https://www.isaca.org/credentialing/cism" }, { name: "CISSP", type: "premium", link: "https://www.isc2.org/Certifications/CISSP" }] }] }] },
    appsec: { title: "AppSec Engineer", description: "Architects of secure software who integrate defense directly into the development lifecycle.", stages: [{ level: "Initiate", color: "from-teal-600 to-cyan-800", topics: [{ id: "as-coding", title: "Polyglot Programming", content: "Deep understanding of logic in Java, Python, or JavaScript.", skills: ["Java/Python/JS", "OOP Concepts", "API Structure", "Framework Logic", "Git Basics"], resources: [{ name: "FreeCodeCamp", type: "free", link: "https://www.freecodecamp.org/" }, { name: "Codecademy Pro", type: "premium", link: "https://www.codecademy.com/" }] }, { id: "as-http", title: "HTTP Protocol", content: "The backbone of web communication.", skills: ["HTTP Methods", "Status Codes", "Cookies/Sessions", "CORS", "Headers"], resources: [{ name: "MDN Web Docs", type: "free", link: "https://developer.mozilla.org/en-US/" }] }] }, { level: "Adept", color: "from-cyan-600 to-sky-800", topics: [{ id: "as-secure-code", title: "Secure Coding", content: "Writing code that withstands attack.", skills: ["Input Validation", "Output Encoding", "Parameterized SQL", "Error Handling", "Auth Logic"], resources: [{ name: "OWASP Secure Coding", type: "free", link: "https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/" }, { name: "SecureFlag", type: "premium", link: "https://www.secureflag.com/" }] }, { id: "as-sast-dast", title: "Automated Testing", content: "SAST & DAST pipeline integration.", skills: ["SonarQube", "OWASP ZAP", "CI/CD Integration", "False Positives", "Code Review"], resources: [{ name: "GitLab CI/CD", type: "free", link: "https://docs.gitlab.com/ee/ci/" }, { name: "Veracode", type: "premium", link: "https://www.veracode.com/" }] }] }, { level: "Master", color: "from-sky-600 to-blue-900", topics: [{ id: "as-devsecops", title: "DevSecOps Architect", content: "Seamless security velocity.", skills: ["Docker Security", "Kubernetes", "IaC Scanning", "GitOps", "Shift Left"], resources: [{ name: "Kubernetes Security", type: "free", link: "https://kubernetes.io/docs/concepts/security/" }, { name: "Certified DevSecOps Professional", type: "premium", link: "https://www.practical-devsecops.com/" }] }, { id: "as-threat-mod", title: "Threat Modeling", content: "Design-phase risk analysis.", skills: ["STRIDE Model", "DREAD", "Data Flow Diag.", "Risk Analysis", "Design Review"], resources: [{ name: "Microsoft Threat Modeling Tool", type: "free", link: "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool" }, { name: "Adam Shostack's Book", type: "premium", link: "https://www.amazon.com/Threat-Modeling-Designing-Adam-Shostack/dp/1118809998" }] }] }, { level: "Legend", color: "from-indigo-600 to-purple-900", topics: [{ id: "as-api-sec", title: "API Security Specialist", content: "Securing the connective tissue of the modern web.", skills: ["GraphQL", "OAuth 2.0", "OIDC", "JWT Attacks", "Mass Assignment"], resources: [{ name: "API Security University", type: "free", link: "https://www.apisecuniversity.com/" }, { name: "Practical API Hacking", type: "premium", link: "https://cm.tcm-sec.com/p/practical-api-hacking" }] }, { id: "as-mobile", title: "Mobile App Security", content: "Securing iOS and Android ecosystems.", skills: ["APK Analysis", "Frida", "SSL Pinning", "Secure Storage", "iOS Plist"], resources: [{ name: "MSTG (OWASP)", type: "free", link: "https://mas.owasp.org/MASTG/" }, { name: "SANS SEC575", type: "premium", link: "https://www.sans.org/cyber-security-courses/mobile-device-security-ethical-hacking/" }] }] }] },
    soc: { title: "SOC Analyst", description: "The vigilant eyes monitoring the pulse of the network, first to detect and first to respond.", stages: [{ level: "Initiate", color: "from-lime-600 to-green-800", topics: [{ id: "soc-fun", title: "Security Operations", content: "The CIA Triad and the SOC workflow.", skills: ["CIA Triad", "Ticket Mgmt", "SLA Adherence", "Risk Basics", "Tier 1 Duties"], resources: [{ name: "CompTIA Security+", type: "premium", link: "https://www.comptia.org/certifications/security" }, { name: "Professor Messer Sec+", type: "free", link: "https://www.youtube.com/playlist?list=PLG49S3nxzAnkL2ulUS31/V" }] }, { id: "soc-phish", title: "Email Analysis", content: "Investigating the #1 attack vector: Phishing.", skills: ["Header Analysis", "SPF/DKIM/DMARC", "URL Sandboxing", "Attachement Ops", "Social Eng."], resources: [{ name: "PhishTool", type: "free", link: "https://www.phishtool.com/" }, { name: "LetsDefend", type: "premium", link: "https://letsdefend.io/" }] }] }, { level: "Adept", color: "from-green-600 to-emerald-800", topics: [{ id: "soc-traffic", title: "Packet Analysis", content: "Reading the wire.", skills: ["Wireshark", "TCPDump", "C2 Beacons", "Data Exfil", "PCAP Forensics"], resources: [{ name: "Malware Traffic Analysis", type: "free", link: "https://www.malware-traffic-analysis.net/" }, { name: "Chris Sanders' Course", type: "premium", link: "https://chrissanders.org/training/packet-analysis/" }] }, { id: "soc-edr", title: "Endpoint Monitoring", content: "EDR telemetry investigation.", skills: ["Process Trees", "Parent-Child Rel.", "CrowdStrike/S1", "Isolation", "Telemetry"], resources: [{ name: "CrowdStrike University", type: "premium", link: "https://www.crowdstrike.com/university/" }] }] }, { level: "Master", color: "from-emerald-600 to-teal-900", topics: [{ id: "soc-automation", title: "SOAR Engineering", content: "Automating the repetitive.", skills: ["Playbook Design", "Tines/Splunk SOAR", "API Integration", "Auto-Enrichment", "Python Ops"], resources: [{ name: "Tines Community Edition", type: "free", link: "https://www.tines.com/" }] }, { id: "soc-forensics", title: "Digital Forensics", content: "Post-mortem investigation.", skills: ["Disk Imaging", "Registry Hives", "Prefetch", "Browser History", "Timeline Analysis"], resources: [{ name: "Autopsy", type: "free", link: "https://www.autopsy.com/" }, { name: "SANS FOR500", type: "premium", link: "https://www.sans.org/cyber-security-courses/windows-forensic-analysis/" }] }] }, { level: "Legend", color: "from-amber-600 to-yellow-900", topics: [{ id: "soc-intel", title: "Threat Intelligence", content: "Predicting the enemy.", skills: ["Threat Feeds", "APT Attribution", "Diamond Model", "Kill Chain", "Strategic Intel"], resources: [{ name: "Mandiant Threat Intel", type: "premium", link: "https://www.mandiant.com/" }, { name: "ARC4 Hazard", type: "free", link: "https://github.com/arch4/hazard" }] }, { id: "soc-manager", title: "SOC Management", content: "Building and leading world-class teams.", skills: ["KPIs/Metrics", "Capacity Planning", "Shift Rotation", "Burnout Mgmt", "Cost Mgmt"], resources: [{ name: "Blue Team Handbook", type: "premium", link: "https://www.amazon.com/Blue-Team-Handbook-Operations-Technology/dp/1500734756" }] }] }] },
    cloudSec: { title: "Cloud Security Engineer", description: "The architects of the sky, securing the ephemeral infrastructure powering the modern world.", stages: [{ level: "Initiate", color: "from-sky-600 to-blue-800", topics: [{ id: "cs-basics", title: "Cloud Fundamentals", content: "Understanding the shared responsibility model and core services.", skills: ["AWS/Azure Basics", "Shared Responsibility", "Virtualization", "Regions/Zones", "Billing"], resources: [{ name: "AWS Cloud Practitioner Essentials", type: "free", link: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/" }, { name: "Azure Fundamentals (AZ-900)", type: "free", link: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/" }] }, { id: "cs-linux-net", title: "Linux & Networking", content: "The OS of the cloud and how it connects.", skills: ["SSH Key Mgmt", "VPC/VNet Design", "Load Balancing", "Firewalld/Iptables", "DNS Records"], resources: [{ name: "Linux Survival", type: "free", link: "https://linuxsurvival.com/" }] }] }, { level: "Adept", color: "from-blue-600 to-indigo-800", topics: [{ id: "cs-iam", title: "Identity & Access (IAM)", content: "The new perimeter is identity.", skills: ["Role Assumption", "Least Privilege", "Service Principals", "MFA Policies", "OIDC"], resources: [{ name: "AWS IAM Documentation", type: "free", link: "https://docs.aws.amazon.com/iam/" }, { name: "Cloud Security Alliance (CCSK)", type: "premium", link: "https://cloudsecurityalliance.org/education/ccsk/" }] }, { id: "cs-storage", title: "Data Security", content: "Securing S3 buckets and databases.", skills: ["Bucket Policies", "Encryption (KMS)", "Data Classification", "Backup Strategies", "DLP"], resources: [{ name: "AWS Security Specialty", type: "premium", link: "https://aws.amazon.com/certification/certified-security-specialty/" }] }] }, { level: "Master", color: "from-indigo-600 to-violet-900", topics: [{ id: "cs-k8s", title: "Container Security", content: "Securing orchestration and microservices.", skills: ["Docker Hardening", "K8s RBAC", "Network Policies", "Image Signing", "Runtime Security"], resources: [{ name: "Hacking Kubernetes", type: "premium", link: "https://www.oreilly.com/library/view/hacking-kubernetes/9781492081729/" }, { name: "CKS Certification", type: "premium", link: "https://www.cncf.io/certification/cks/" }] }, { id: "cs-iac", title: "Infrastructure as Code", content: "Automating security in Terraform and CloudFormation.", skills: ["Terraform", "Checkov", "Policy as Code", "Drift Detection", "GitOps"], resources: [{ name: "Terraform Goats", type: "free", link: "https://github.com/bridgecrewio/terragot" }] }] }, { level: "Legend", color: "from-violet-600 to-fuchsia-900", topics: [{ id: "cs-multicloud", title: "Multi-Cloud Strategy", content: "Mastering complexity across providers.", skills: ["Vendor Agnostic Design", "Unified Logging", "CSPM Tools", "Inter-cloud Networking", "Exit Strategy"], resources: [{ name: "Google Professional Cloud Security Engineer", type: "premium", link: "https://cloud.google.com/certification/cloud-security-engineer" }] }, { id: "cs-serverless", title: "Serverless Security", content: "Securing functions and event-driven architectures.", skills: ["Lambda Injection", "Function Perms", "API Gateway Sec", "Cold Start Attacks", "Dependency Vulns"], resources: [{ name: "OWASP Serverless Top 10", type: "free", link: "https://owasp.org/www-project-serverless-top-10/" }] }] }] },
    forensics: { title: "Digital Forensics", description: "The cyber detectives recovering evidence from the digital wreckage to solve crimes and incidents.", stages: [{ level: "Initiate", color: "from-slate-600 to-gray-800", topics: [{ id: "df-basics", title: "Fundamentals", content: "Understanding evidence and legal procedures.", skills: ["Chain of Custody", "Hashing (MD5/SHA)", "Write Blockers", "Legal Processes", "Note Taking"], resources: [{ name: "NIST Guide to Forensics", type: "free", link: "https://csrc.nist.gov/publications/detail/sp/800-86/final" }] }, { id: "df-filesys", title: "File Systems", content: "How data lives on the disk.", skills: ["NTFS $MFT", "FAT32", "EXT4", "Slack Space", "Timestamps (MAC)"], resources: [{ name: "File System Forensic Analysis", type: "premium", link: "https://www.amazon.com/System-Forensic-Analysis-Brian-Carrier/dp/0321268172" }] }] }, { level: "Adept", color: "from-gray-600 to-zinc-800", topics: [{ id: "df-windows", title: "Windows Forensics", content: "Digging into the registry and artifacts.", skills: ["Registry Analysis", "Prefetch", "Shellbags", "Event Logs", "LNK Files"], resources: [{ name: "13Cubed YouTube", type: "free", link: "https://www.youtube.com/c/13cubed" }, { name: "SANS FOR500", type: "premium", link: "https://www.sans.org/cyber-security-courses/windows-forensic-analysis/" }] }, { id: "df-disk", title: "Disk Investigation", content: "Using tools to carve data.", skills: ["Autopsy", "FTK Imager", "Data Carving", "Encryption Detection", "Keyword Search"], resources: [{ name: "Autopsy Training", type: "free", link: "https://www.autopsy.com/support/training/" }] }] }, { level: "Master", color: "from-zinc-600 to-neutral-900", topics: [{ id: "df-memory", title: "Memory Forensics", content: "Analyzing volatile RAM data.", skills: ["Volatility Framework", "Process Injection", "Malware Extraction", "Network Conns", "Shimcache"], resources: [{ name: "Art of Memory Forensics", type: "premium", link: "https://www.amazon.com/Art-Memory-Forensics-Detecting-Malware/dp/1118825098" }] }, { id: "df-network", title: "Network Forensics", content: "Reconstructing network events.", skills: ["PCAP Analysis", "Flow Data", "Web Logs", "Email Headers", "Tunneling Detection"], resources: [{ name: "Network Forensics (Sherri Davidoff)", type: "premium", link: "https://www.amazon.com/Network-Forensics-Tracking-Hackers-Cyberspace/dp/0132564144" }] }] }, { level: "Legend", color: "from-neutral-600 to-stone-900", topics: [{ id: "df-mobile", title: "Mobile Forensics", content: "Extracting data from iOS and Android.", skills: ["Jailbreak/Root", "iTunes Backup", "Android ADB", "SQLite Analysis", "Cloud Extraction"], resources: [{ name: "SANS FOR585", type: "premium", link: "https://www.sans.org/cyber-security-courses/smartphone-forensic-analysis-in-depth/" }] }, { id: "df-anti", title: "Anti-Forensics", content: "Countering attempts to hide evidence.", skills: ["Timestomping", "Wiping Tools", "Steganography", "Encryption Breaking", "Rootkits"], resources: [{ name: "Defeating Anti-Forensics", type: "free", link: "https://www.researchgate.net/" }] }] }] },
    grc: { title: "GRC Analyst", description: "The strategists ensuring the organization plays by the rules and manages risk effectively.", stages: [{ level: "Initiate", color: "from-yellow-600 to-amber-800", topics: [{ id: "grc-basics", title: "IT Fundamentals", content: "Understanding what you are governing.", skills: ["OS Basics", "Network Topologies", "Asset Management", "CIA Triad", "Business Continuity"], resources: [{ name: "Google IT Support Cert", type: "premium", link: "https://www.coursera.org/professional-certificates/google-it-support" }] }, { id: "grc-frameworks", title: "Frameworks Intro", content: "The rulebooks of security.", skills: ["NIST CSF", "ISO 27001 Intro", "CIS Controls", "SOC2 Basics", "Policy vs Procedure"], resources: [{ name: "NIST Cybersecurity Framework", type: "free", link: "https://www.nist.gov/cyberframework" }] }] }, { level: "Adept", color: "from-amber-600 to-orange-800", topics: [{ id: "grc-compliance", title: "Regulatory Compliance", content: "Navigating the legal landscape.", skills: ["GDPR", "HIPAA", "PCI-DSS", "Audit Prep", "Gap Analysis"], resources: [{ name: "CISA Study Guide", type: "premium", link: "https://www.amazon.com/CISA-Certified-Information-Systems-Auditor/dp/1119056241" }] }, { id: "grc-policy", title: "Policy Engineering", content: "Writing effective rules.", skills: ["AUP Writing", "Exception Mgmt", "Standard Creation", "Stakeholder Comm", "Version Control"], resources: [{ name: "SANS Policy Templates", type: "free", link: "https://www.sans.org/information-security-policy/" }] }] }, { level: "Master", color: "from-orange-600 to-red-900", topics: [{ id: "grc-risk", title: "Risk Management", content: "Quantifying the unknown.", skills: ["Risk Registers", "Heat Maps", "FAIR Methodology", "Third-Party Risk", "BIA"], resources: [{ name: "CRISC Certification", type: "premium", link: "https://www.isaca.org/credentialing/crisc" }] }, { id: "grc-audit", title: "Security Auditing", content: "Validating the controls.", skills: ["Audit Lifecycle", "Evidence Gathering", "Reporting", "Control Testing", "Sampling"], resources: [{ name: "ISACA CISA", type: "premium", link: "https://www.isaca.org/credentialing/cisa" }] }] }, { level: "Legend", color: "from-red-600 to-rose-900", topics: [{ id: "grc-ciso", title: "Executive Strategy", content: "Aligning security with business goals.", skills: ["Budgeting", "Board Reporting", "Strategic Planning", "Culture Building", "Crisis Comm"], resources: [{ name: "CISO Desk Reference Guide", type: "premium", link: "https://www.amazon.com/CISO-Desk-Reference-Guide-Practical/dp/0997744129" }] }, { id: "grc-privacy", title: "Data Privacy Officer", content: "Protecting the human element.", skills: ["Privacy Impact Asses.", "Data Flow Mapping", "Global Privacy Laws", "Ethics", "Privacy by Design"], resources: [{ name: "IAPP CIPP", type: "premium", link: "https://iapp.org/certify/cipp/" }] }] }] },
    secArch: { title: "Security Architect", description: "The visionaries who design complex, secure systems from the ground up.", stages: [{ level: "Initiate", color: "from-teal-600 to-emerald-800", topics: [{ id: "sa-syseng", title: "Systems Engineering", content: "Understanding how components fit together.", skills: ["OS Architecture", "Network Design", "Database Design", "Virtualization", "Load Balancing"], resources: [{ name: "Systems Engineering Fundamentals", type: "free", link: "https://www.dau.edu/" }] }, { id: "sa-principles", title: "Security Principles", content: "The theoretical bedrock.", skills: ["Defense in Depth", "Least Privilege", "Fail Safe", "Open Design", "Separation of Duties"], resources: [{ name: "Saltzer and Schroeder", type: "free", link: "https://web.mit.edu/Saltzer/www/publications/protection/index.html" }] }] }, { level: "Adept", color: "from-emerald-600 to-green-800", topics: [{ id: "sa-enterprise", title: "Enterprise Architecture", content: "Designing for the whole organization.", skills: ["TOGAF Basics", "SABSA", "Business Logic", "Requirement Analysis", "Integration Patterns"], resources: [{ name: "TOGAF Standard", type: "free", link: "https://www.opengroup.org/togaf" }] }, { id: "sa-identity", title: "IAM Architecture", content: "Designing the identity fabric.", skills: ["Federation (SAML/OIDC)", "Directory Services", "PAM Design", "MFA Strategy", "RBAC/ABAC"], resources: [{ name: "NIST Digital Identity Guidelines", type: "free", link: "https://pages.nist.gov/800-63-3/" }] }] }, { level: "Master", color: "from-green-600 to-lime-900", topics: [{ id: "sa-cloud-arch", title: "Cloud Architecture", content: "Designing secure cloud native systems.", skills: ["Landing Zones", "Hub and Spoke", "Gateway Load Balancers", "Transit Gateway", "Encryption Strategy"], resources: [{ name: "AWS Security Reference Architecture", type: "free", link: "https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/welcome.html" }] }, { id: "sa-zero-trust", title: "Zero Trust Implementation", content: "Moving beyond the perimeter.", skills: ["Policy Engines", "Segmentation Gateways", "Device Trust", "Data Categorization", "ZTA Strategy"], resources: [{ name: "Zero Trust Networks (O'Reilly)", type: "premium", link: "https://www.oreilly.com/library/view/zero-trust-networks/9781491962183/" }] }] }, { level: "Legend", color: "from-lime-600 to-yellow-900", topics: [{ id: "sa-transform", title: "Digital Transformation", content: "Leading major technology shifts safely.", skills: ["Legacy Migration", "Stakeholder Mgmt", "Cost/Benefit Analysis", "Innovation Labs", "Security Culture"], resources: [{ name: "CISSP-ISSAP", type: "premium", link: "https://www.isc2.org/Certifications/CISSP-ISSAP" }] }, { id: "sa-post-quantum", title: "Future Architecture", content: "Preparing for the next era.", skills: ["Post-Quantum Crypto", "AI Architecture", "Blockchain Security", "Edge Computing", "Bio-Auth"], resources: [{ name: "NIST Post-Quantum Project", type: "free", link: "https://csrc.nist.gov/projects/post-quantum-cryptography" }] }] }] },
    icsSec: { title: "ICS/OT Security", description: "Defending the critical infrastructure and industrial systems that keep society running.", stages: [{ level: "Initiate", color: "from-orange-600 to-red-800", topics: [{ id: "ics-basics", title: "Industrial Fundamentals", content: "Physics meets digital. How plants work.", skills: ["PLCs & RTUs", "Purdue Model", "Sensors/Actuators", "SCADA Basics", "Safety Systems"], resources: [{ name: "SANS ICS Concepts", type: "free", link: "https://www.sans.org/industrial-control-systems-security/" }] }, { id: "ics-protocols", title: "OT Protocols", content: "Speaking the language of machines.", skills: ["Modbus", "DNP3", "BACnet", "Profibus", "Protocol Analysis"], resources: [{ name: "Wireshark for ICS", type: "free", link: "https://www.wireshark.org/" }] }] }, { level: "Adept", color: "from-red-600 to-rose-800", topics: [{ id: "ics-network", title: "ICS Networking", content: "Connecting the plant floor safely.", skills: ["Air Gaps", "Data Diodes", "Industrial Firewalls", "Zones & Conduits", "Wireless (ISA100)"], resources: [{ name: "ISA/IEC 62443", type: "premium", link: "https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards" }] }, { id: "ics-hmi", title: "HMI Security", content: "Securing the operator interface.", skills: ["Windows Hardening (Legacy)", "Access Control", "Remote Access", "Engineering Workstations", "Patching Challenges"], resources: [{ name: "CISA ICS-CERT", type: "free", link: "https://www.cisa.gov/ics" }] }] }, { level: "Master", color: "from-rose-600 to-pink-900", topics: [{ id: "ics-threats", title: "ICS Threat Landscape", content: "Analyzing attacks on physical systems.", skills: ["Stuxnet Analysis", "Triton/Trisis", "Industroyer", "Living off the Land", "MITRE ATT&CK for ICS"], resources: [{ name: "Dragos Threat Intel", type: "free", link: "https://www.dragos.com/" }] }, { id: "ics-ir", title: "OT Incident Response", content: "Responding without breaking physics.", skills: ["Safety First", "Physical Isolation", "Forensics on PLCs", "Disaster Recovery", "Tabletop Exercises"], resources: [{ name: "SANS GICSP", type: "premium", link: "https://www.giac.org/certification/global-industrial-cyber-security-professional-gicsp/" }] }] }, { level: "Legend", color: "from-pink-600 to-fuchsia-900", topics: [{ id: "ics-convergence", title: "IT/OT Convergence", content: "Merging two worlds securely.", skills: ["IIoT Security", "Cloud SCADA", "Unified SOC", "Cultural Bridge", "Predictive Maint."], resources: [{ name: "SANS GRID", type: "premium", link: "https://www.giac.org/certification/response-industrial-defense-grid/" }] }, { id: "ics-nation", title: "Nation-State Defense", content: "Protecting the grid from cyberwar.", skills: ["APT Defense", "Supply Chain Sec", "Hardware Implants", "Signal Intel", "Strategic Resilience"], resources: [{ name: "Countdown to Zero Day", type: "premium", link: "https://www.amazon.com/Countdown-Zero-Day-Stuxnet-Digital/dp/0770436196" }] }] }] },
    aiSec: { title: "AI Security Engineer", description: "Securing the new frontier of Artificial Intelligence and Machine Learning models against adversarial attacks.", stages: [{ level: "Initiate", color: "from-fuchsia-600 to-purple-800", topics: [{ id: "ai-basics", title: "AI/ML Fundamentals", content: "Understanding how models learn and predict.", skills: ["Neural Networks", "Supervised Learning", "Python for ML", "Pandas/NumPy", "Model Training"], resources: [{ name: "Andrew Ng's AI for Everyone", type: "free", link: "https://www.coursera.org/learn/ai-for-everyone" }, { name: "Kaggle Intro to ML", type: "free", link: "https://www.kaggle.com/learn/intro-to-machine-learning" }] }, { id: "ai-owasp", title: "OWASP Top 10 for LLMs", content: "The standard for AI application security.", skills: ["Prompt Injection", "Insecure Output", "Model Theft", "Data Poisoning", "Supply Chain"], resources: [{ name: "OWASP LLM Top 10", type: "free", link: "https://owasp.org/www-project-top-10-for-large-language-models/" }] }] }, { level: "Adept", color: "from-purple-600 to-violet-800", topics: [{ id: "ai-red-team", title: "AI Red Teaming", content: "Attacking models to find flaws.", skills: ["Jailbreaking LLMs", "Adversarial Examples", "Extraction Attacks", "Gandalf CTF", "PyRIT"], resources: [{ name: "Azure AI Red Team Guide", type: "free", link: "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/red-teaming" }] }, { id: "ai-sec-ops", title: "MLSecOps", content: "Securing the ML pipeline.", skills: ["Model Signing", "Provenance", "Input Sanitization", "Adversarial Defense", "Privacy (Differential)"], resources: [{ name: "Practical ML Security", type: "premium", link: "https://www.oreilly.com/library/view/practical-machine-learning/9781492071980/" }] }] }, { level: "Master", color: "from-violet-600 to-indigo-900", topics: [{ id: "ai-privacy", title: "Privacy Preserving AI", content: "Learning without leaking.", skills: ["Federated Learning", "Homomorphic Encryption", "TEE for AI", "Secure MPC", "Anonymization"], resources: [{ name: "OpenMined Courses", type: "free", link: "https://courses.openmined.org/" }] }, { id: "ai-agent", title: "Agentic Security", content: "Securing autonomous AI agents.", skills: ["Tool Use Auth", "Agent Isolation", "Recursive Self-Improvement Risks", "Sandboxing", "Human in Loop"], resources: [{ name: "LangChain Security", type: "free", link: "https://python.langchain.com/docs/security" }] }] }, { level: "Legend", color: "from-indigo-600 to-slate-900", topics: [{ id: "ai-alignment", title: "AI Safety & Alignment", content: "Ensuring AGI remains beneficial.", skills: ["Interpretability", "Scalable Oversight", "Robustness", "Governance", "Existential Risk"], resources: [{ name: "AISafety.com", type: "free", link: "https://www.aisafety.com/" }] }] }] },
    aiUsage: { title: "AI in Cybersecurity", description: "Master the art of weaponizing AI for offensive operations and leveraging Machine Learning for next-gen defense.", stages: [{ level: "Initiate", color: "from-teal-600 to-emerald-800", topics: [{ id: "ai-usage-tools", title: "Generative AI Tools", content: "Boosting productivity with AI assistants.", skills: ["Prompt Engineering", "ChatGPT for Scripting", "Log Summarization", "Report Generation", "Code Explanation"], resources: [{ name: "Learn Prompting", type: "free", link: "https://learnprompting.org/" }, { name: "ChatGPT for Cybersecurity", type: "premium", link: "https://www.udemy.com/course/chatgpt-for-cybersecurity/" }] }, { id: "ai-usage-coding", title: "AI-Assisted Coding", content: "Writing secure code faster.", skills: ["GitHub Copilot", "Cursor Editor", "Code Refactoring", "Unit Test Gen", "Vulnerability Scanning"], resources: [{ name: "Snyk + AI", type: "free", link: "https://snyk.io/platform/deepcode-ai/" }] }] }, { level: "Adept", color: "from-emerald-600 to-green-800", topics: [{ id: "ai-usage-offense", title: "Offensive AI", content: "Weaponizing machine learning.", skills: ["Deepfakes", "Voice Cloning", "Automated Phishing", "Password Cracking with AI", "Evasion Techniques"], resources: [{ name: "WormGPT Analysis", type: "free", link: "https://slashnext.com/blog/wormgpt-the-generative-ai-tool-cybercriminals-are-using-to-launch-business-email-compromise-attacks/" }] }, { id: "ai-usage-osint", title: "AI for OSINT", content: "Automated reconnaissance.", skills: ["Social Media Analysis", "Pattern Recognition", "Data Correlation", "Facial Recognition", "Geolocation AI"], resources: [{ name: "OSINT Industries", type: "premium", link: "https://osint.industries/" }] }] }, { level: "Master", color: "from-green-600 to-lime-900", topics: [{ id: "ai-usage-defense", title: "Defensive AI (Blue AI)", content: "AI-driven threat detection.", skills: ["UEBA", "Anomaly Detection", "Phishing Detection Models", "Microsoft Security Copilot", "Auto-Triage"], resources: [{ name: "Elastic Security AI", type: "free", link: "https://www.elastic.co/security/ai" }, { name: "Darktrace Academy", type: "premium", link: "https://darktrace.com/" }] }, { id: "ai-usage-malware", title: "AI Malware Analysis", content: "Classifying threats with ML.", skills: ["Static Analysis ML", "Behavioral Clustering", "Signature Generation", "Polymorphic Detection", "Dataset Training"], resources: [{ name: "Malware Data Science", type: "premium", link: "https://www.amazon.com/Malware-Data-Science-Attack-Detection/dp/1593278594" }] }] }, { level: "Legend", color: "from-lime-600 to-yellow-900", topics: [{ id: "ai-usage-autonomous", title: "Autonomous Cyber Operations", content: "Self-healing and self-attacking systems.", skills: ["Autonomous SOC", "Auto-Patching", "Decision Transformers", "Game Theory in Cyber", "Human-Machine Teaming"], resources: [{ name: "DARPA Cyber Grand Challenge", type: "free", link: "https://www.darpa.mil/program/cyber-grand-challenge" }] }] }] },
    bugBounty: { title: "Bug Bounty Hunter", description: "The art of crowd-sourced security testing. Find critical vulnerabilities in public programs for rewards and recognition.", stages: [{ level: "Initiate", color: "from-amber-600 to-yellow-800", topics: [{ id: "bb-basics", title: "Platform & Reporting", content: "Understanding the ecosystem and how to get paid.", skills: ["HackerOne/Bugcrowd", "Vulnerability Disclosure (VDP)", "Effective Report Writing", "CVSS Scoring", "Scope Analysis"], resources: [{ name: "HackerOne 101", type: "free", link: "https://www.hackerone.com/hackers/hacker101" }, { name: "Bug Bounty Hunter (Zseano)", type: "premium", link: "https://www.bugbountyhunter.com/" }] }, { id: "bb-web-fund", title: "Web Hacking 101", content: "The core mechanics of web vulnerability hunting.", skills: ["HTTP Request/Response", "Subdomain Takeover", "HTML Injection", "Information Disclosure", "Google Dorking"], resources: [{ name: "NahamSec YouTube", type: "free", link: "https://www.youtube.com/c/NahamSec" }, { name: "Web Hacking 101 (Book)", type: "premium", link: "https://leanpub.com/webhacking101" }] }] }, { level: "Adept", color: "from-orange-600 to-red-800", topics: [{ id: "bb-recon", title: "Reconnaissance Methodology", content: "Finding what others miss. The key to success.", skills: ["Subdomain Enum (Amass/Subfinder)", "Content Discovery (FFUF)", "Parameter Fuzzing", "GitHub Recon", "Tech Stack Analysis"], resources: [{ name: "Jason Haddix Recon Guide", type: "free", link: "https://www.youtube.com/watch?v=p4JgIu1mceI" }] }, { id: "bb-client-side", title: "Client-Side & Logic", content: "Exploiting user interaction and business logic.", skills: ["XSS (Reflected/Stored/DOM)", "CSRF", "IDOR / BAC", "OAuth Misconfiguration", "Race Conditions"], resources: [{ name: "PortSwigger Academy", type: "free", link: "https://portswigger.net/web-security" }] }] }, { level: "Master", color: "from-red-600 to-rose-900", topics: [{ id: "bb-server-side", title: "Server-Side Criticals", content: "High-impact vulnerabilities that pay the bills.", skills: ["SSRF (Cloud Context)", "XXE Injection", "Insecure Deserialization", "SQL Injection (Advanced)", "RCE"], resources: [{ name: "PentesterLab", type: "premium", link: "https://pentesterlab.com/" }] }, { id: "bb-mobile", title: "Mobile Bug Bounty", content: "Hunting on Android and iOS apps.", skills: ["Decompiling APKs", "Deep Link Analysis", "Hardcoded Secrets", "Traffic Interception", "Frida Instrumentation"], resources: [{ name: "Oversecured", type: "premium", link: "https://oversecured.com/" }] }] }, { level: "Legend", color: "from-rose-600 to-pink-900", topics: [{ id: "bb-automation", title: "Automation Engineering", content: "Building a bot army to hunt while you sleep.", skills: ["Bash/Python Scripting", "VPS Management", "Notification Pipelines", "Continuous Scanning", "Custom Tool Dev"], resources: [{ name: "ProjectDiscovery Tools", type: "free", link: "https://projectdiscovery.io/" }] }, { id: "bb-chaining", title: "Vulnerability Chaining", content: "Turning Lows into Criticals.", skills: ["Chain Reaction", "Escalation Paths", "Pivot Techniques", "Impact Maximization", "Creative Thinking"], resources: [{ name: "HackerOne Hacktivity", type: "free", link: "https://hackerone.com/hacktivity" }] }] }] },
    certifications: { title: "Certification Path", description: "The definitive guide to industry-recognized credentials. A curated list of what actually matters for each role.", stages: [{ level: "Initiate", color: "from-teal-600 to-emerald-800", topics: [{ id: "cert-entry-gen", title: "General Entry Level", content: "The absolute basics for getting your foot in the door.", skills: ["CompTIA Security+ (The Standard)", "ISC2 CC (Free Option)", "Google Cybersecurity Cert", "CompTIA Network+", "IT Fundamentals"], resources: [{ name: "CompTIA Security+", type: "premium", link: "https://www.comptia.org/certifications/security" }, { name: "ISC2 Certified in Cybersecurity", type: "free", link: "https://www.isc2.org/Certifications/CC" }] }, { id: "cert-entry-role", title: "Junior Role Specific", content: "First steps into specialization.", skills: ["eJPT (Junior Pentester)", "BTL1 (Junior SOC/Blue Team)", "PJPT (Practical Junior Pentest)", "AWS Cloud Practitioner"], resources: [{ name: "eLearnSecurity eJPT", type: "premium", link: "https://elearnsecurity.com/product/ejpt-certification/" }, { name: "Blue Team Level 1", type: "premium", link: "https://securityblue.team/" }] }] }, { level: "Adept", color: "from-emerald-600 to-green-800", topics: [{ id: "cert-mid-red", title: "Red Team & Pentest", content: "The 'Gold Standard' practical exams.", skills: ["OSCP (The HR Filter)", "PNPT (The Realistic One)", "CRTP (Active Directory)", "eWPT (Web App)", "CRTO (Red Teaming)"], resources: [{ name: "OffSec PEN-200 (OSCP)", type: "premium", link: "https://www.offsec.com/courses/pen-200/" }, { name: "TCM Security PNPT", type: "premium", link: "https://certifications.tcm-sec.com/pnpt/" }] }, { id: "cert-mid-blue", title: "Blue Team & Cloud", content: "Defensive and Cloud expertise.", skills: ["CompTIA CySA+ (Analyst)", "CCD (Certified Cyber Defender)", "AWS Security Specialty", "Azure Security Engineer (AZ-500)", "CCSK"], resources: [{ name: "CyberDefenders CCD", type: "premium", link: "https://cyberdefenders.org/blue-team-training/courses/certified-cyber-defender-certification/" }] }] }, { level: "Master", color: "from-green-600 to-lime-900", topics: [{ id: "cert-adv-tech", title: "Advanced Technical", content: "Deep technical mastery.", skills: ["CPTS (HackTheBox Pentest)", "OSEP (Evasion)", "OSWE (Web Exploitation)", "GCIH (Incident Handling)", "FOR508 (Threat Hunting)"], resources: [{ name: "HTB Certified Penetration Tester", type: "premium", link: "https://academy.hackthebox.com/preview/certifications/htb-certified-penetration-tester" }, { name: "SANS GCIH", type: "premium", link: "https://www.giac.org/certification/certified-incident-handler-gcih/" }] }, { id: "cert-mgmt", title: "Management & Audit", content: "Leadership and compliance.", skills: ["CISSP (The Management Standard)", "CISA (Auditing)", "CISM (Information Security Manager)", "CRISC (Risk)", "ISO 27001 Lead Implementer"], resources: [{ name: "ISC2 CISSP", type: "premium", link: "https://www.isc2.org/Certifications/CISSP" }] }] }, { level: "Legend", color: "from-lime-600 to-yellow-900", topics: [{ id: "cert-elite", title: "Elite & Niche", content: "The top 1% of certifications.", skills: ["OSCE3 (OffSec Expert 3)", "GREM (Malware Reverse Eng)", "GXPN (Exploit Dev)", "CCISO (Chief InfoSec Officer)", "OSEE (Windows Exploitation)"], resources: [{ name: "OffSec OSCE3", type: "premium", link: "https://www.offsec.com/courses/osce3/" }] }] }] },
    cyberFundamentals: { title: "Cyber Fundamentals", description: "The absolute prerequisites. Master the foundational knowledge before specializing in any role.", stages: [{ level: "Initiate", color: "from-slate-600 to-zinc-800", topics: [{ id: "fund-hardware", title: "Computer Hardware", content: "How computers actually work.", skills: ["CPU/RAM/Storage", "Motherboards", "BIOS/UEFI", "Peripherals", "Boot Process"], resources: [{ name: "CompTIA A+", type: "premium", link: "https://www.comptia.org/certifications/a" }] }, { id: "fund-os", title: "Operating Systems", content: "Windows, Linux, and MacOS internals.", skills: ["File Systems", "Process Management", "User Accounts", "CLI Basics", "Virtualization"], resources: [{ name: "Google IT Support", type: "free", link: "https://grow.google/certificates/it-support/" }] }] }, { level: "Adept", color: "from-zinc-600 to-stone-800", topics: [{ id: "fund-net", title: "Networking 101", content: "The internet's plumbing.", skills: ["IP Addresses", "Ports & Protocols", "Routers/Switches", "OSI Model", "HTTP/HTTPS"], resources: [{ name: "NetworkChuck CCNA", type: "free", link: "https://www.youtube.com/playlist?list=PLIhvC56v63IJVXv0GGkC2kK9ghdsqQuy_" }] }, { id: "fund-crypto", title: "Cryptography Basics", content: "Secrets and signatures.", skills: ["Symmetric vs Asymmetric", "Hashing", "Digital Signatures", "PKI", "SSL/TLS Handshake"], resources: [{ name: "Khan Academy Crypto", type: "free", link: "https://www.khanacademy.org/computing/computer-science/cryptography" }] }] }, { level: "Master", color: "from-stone-600 to-neutral-900", topics: [{ id: "fund-sec-prin", title: "Security Principles", content: "The mindset of security.", skills: ["CIA Triad", "Defense in Depth", "Least Privilege", "Attack Surfaces", "Social Engineering"], resources: [{ name: "Harvard CS50 Cybersecurity", type: "free", link: "https://cs50.harvard.edu/cybersecurity/" }] }, { id: "fund-career", title: "Career Strategy", content: "Navigating the industry.", skills: ["Certifications Roadmap", "Networking (People)", "Resume Building", "Ethics", "Continuous Learning"], resources: [{ name: "NIST Nice Framework", type: "free", link: "https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center" }] }] }] },
    programming: { title: "Programming for Cyber", description: "The language of the machine. Essential coding skills for automation, exploitation, and defense.", stages: [{ level: "Initiate", color: "from-yellow-600 to-amber-800", topics: [{ id: "prog-logic", title: "Logic & Algorithms", content: "Thinking like a programmer.", skills: ["Variables & Types", "Loops", "Conditionals", "Functions", "Basic Data Structures"], resources: [{ name: "CS50 Introduction", type: "free", link: "https://cs50.harvard.edu/x/" }] }, { id: "prog-python", title: "Python for Security", content: "The hacker's swiss army knife.", skills: ["Scripting", "Socket Lib", "Requests", "File I/O", "Regular Expressions"], resources: [{ name: "Python for Everybody", type: "free", link: "https://www.py4e.com/" }] }] }, { level: "Adept", color: "from-amber-600 to-orange-800", topics: [{ id: "prog-bash", title: "Bash & Powershell", content: "Automating the OS.", skills: ["Shell Scripting", "Piping/Redirection", "System Admin Scripts", "Cron/Task Sched", "Grep/Sed/Awk"], resources: [{ name: "Learn Shell", type: "free", link: "https://www.learnshell.org/" }] }, { id: "prog-web", title: "Web Technologies", content: "The language of the web.", skills: ["HTML/CSS", "JavaScript DOM", "Fetch API", "React Basics", "SQL"], resources: [{ name: "The Odin Project", type: "free", link: "https://www.theodinproject.com/" }] }] }, { level: "Master", color: "from-orange-600 to-red-900", topics: [{ id: "prog-low", title: "Low Level (C/C++)", content: "Speaking directly to memory.", skills: ["Pointers", "Memory Management", "Buffer Overflows", "Structs", "Compiler Basics"], resources: [{ name: "C Programming (K&R)", type: "premium", link: "https://en.wikipedia.org/wiki/The_C_Programming_Language" }] }, { id: "prog-go", title: "Go (Golang)", content: "Modern, fast security tools.", skills: ["Concurrency", "Static Binaries", "Networking in Go", "Cloud Native Tools", "Performance"], resources: [{ name: "Black Hat Go", type: "premium", link: "https://nostarch.com/blackhatgo" }] }] }, { level: "Legend", color: "from-red-600 to-rose-900", topics: [{ id: "prog-assembly", title: "Assembly & Reversing", content: "The bare metal truth.", skills: ["x86/x64 Arch", "Registers", "Stack Operations", "Disassembly", "Debugging"], resources: [{ name: "OpenSecurityTraining2", type: "free", link: "https://opensecuritytraining.info/" }] }] }] },
    softSkills: { title: "Soft Skills & Portfolio", description: "The non-technical superpowers that get you hired. Communication, branding, and networking.", stages: [{ level: "Initiate", color: "from-blue-600 to-purple-800", topics: [{ id: "ss-comm", title: "Communication Mastery", content: "Articulating technical concepts clearly.", skills: ["Technical Writing", "Public Speaking", "Report Writing", "Email Etiquette", "Active Listening"], resources: [{ name: "Toastmasters International", type: "free", link: "https://www.toastmasters.org/" }] }, { id: "ss-linkedin", title: "LinkedIn Optimization", content: "Building a professional digital presence.", skills: ["Profile Optimization", "Networking Strategy", "Content Creation", "Job Hunting", "Personal Branding"], resources: [{ name: "LinkedIn Learning", type: "premium", link: "https://www.linkedin.com/learning/" }] }] }, { level: "Adept", color: "from-purple-600 to-pink-800", topics: [{ id: "ss-blog", title: "Technical Blogging", content: "Sharing knowledge to prove expertise.", skills: ["Writing Tutorials", "SEO Basics", "Medium/Hashnode", "Consistency", "Storytelling"], resources: [{ name: "Hashnode", type: "free", link: "https://hashnode.com/" }] }, { id: "ss-github", title: "GitHub Portfolio", content: "Showcasing code and projects.", skills: ["README.md Design", "Open Source Contrib", "Code Cleanliness", "Project Documentation", "Git Best Practices"], resources: [{ name: "GitHub Readme Stats", type: "free", link: "https://github.com/anuraghazra/github-readme-stats" }] }] }, { level: "Master", color: "from-pink-600 to-rose-900", topics: [{ id: "ss-interview", title: "Interview Acing", content: "Cracking the HR and technical rounds.", skills: ["Behavioral Qs (STAR)", "Whiteboard Coding", "Salary Negotiation", "Mock Interviews", "Company Research"], resources: [{ name: "Tech Interview Handbook", type: "free", link: "https://www.techinterviewhandbook.org/" }] }, { id: "ss-network", title: "Strategic Networking", content: "Building meaningful professional relationships.", skills: ["Conferences", "Mentorship", "Cold Outreach", "Community Building", "Giving Back"], resources: [{ name: "BSides Conferences", type: "free", link: "http://www.securitybsides.com/" }] }] }] },
    getHired: { title: "Get Hired", description: "A strategic guide to landing the role. From resume engineering to offer negotiation.", stages: [{ level: "Strategy", color: "from-blue-600 to-indigo-800", topics: [{ id: "gh-resume", title: "Resume Engineering", content: "Beating the ATS and impressing humans.", skills: ["ATS Optimization", "Action Verbs", "Quantifiable Impact", "Project Showcase", "Cover Letters"], resources: [{ name: "Harvard Resume Guide", type: "free", link: "https://careerservices.fas.harvard.edu/channels/create-a-resume-cv-or-cover-letter/" }] }, { id: "gh-network", title: "Networking 2.0", content: "The hidden job market.", skills: ["Cold Outreach", "LinkedIn Strategy", "Value Proposition", "Informational Interviews", "Following Up"], resources: [{ name: "Tech Career Growth", type: "free", link: "https://www.youtube.com/c/TechCareerGrowth" }] }] }, { level: "Execution", color: "from-purple-600 to-pink-800", topics: [{ id: "gh-interview", title: "The Interview Gauntlet", content: "Surviving HR and Technical rounds.", skills: ["STAR Method", "Whiteboard Coding", "System Design", "Mock Interviews", "Questions to Ask"], resources: [{ name: "Tech Interview Handbook", type: "free", link: "https://www.techinterviewhandbook.org/" }] }, { id: "gh-offer", title: "Offer Negotiation", content: "Don't leave money on the table.", skills: ["Market Research", "Total Comp Analysis", "Counter-offers", "Walking Away", "Equity/Stock"], resources: [{ name: "Levels.fyi", type: "free", link: "https://www.levels.fyi/" }] }] }] },
    successMindset: { title: "Success Mindset", description: "The psychological edge needed for longevity in a high-pressure industry.", stages: [{ level: "Foundation", color: "from-emerald-600 to-teal-800", topics: [{ id: "sm-focus", title: "Deep Work & Focus", content: "Mastering attention in a distracted world.", skills: ["Time Blocking", "Pomodoro", "Flow State", "Digital Minimalism", "Prioritization"], resources: [{ name: "Huberman Lab Podcast", type: "free", link: "https://www.hubermanlab.com/" }] }, { id: "sm-kaizen", title: "The Kaizen Way", content: "Continuous incremental improvement.", skills: ["1% Better Everyday", "Feedback Loops", "Learning to Learn", "Growth Mindset", "Consistency"], resources: [{ name: "Atomic Habits Summary", type: "free", link: "https://jamesclear.com/atomic-habits-summary" }] }] }, { level: "Longevity", color: "from-amber-600 to-orange-800", topics: [{ id: "sm-burnout", title: "Burnout Prevention", content: "Staying sane in the long run.", skills: ["Stress Management", "Sleep Hygiene", "Work-Life Balance", "Setting Boundaries", "Physical Health"], resources: [{ name: "Burnout: The Secret", type: "premium", link: "https://www.amazon.com/Burnout-Secret-Unlocking-Stress-Cycle/dp/198481706X" }] }, { id: "sm-imposter", title: "Imposter Syndrome", content: "Overcoming the feeling of being a fraud.", skills: ["Self-Compassion", "Fact-Checking Thoughts", "Mentorship", "Documenting Wins", "Confidence"], resources: [{ name: "TED Talk on Imposter Syndrome", type: "free", link: "https://www.ted.com/talks/elizabeth_cox_what_is_imposter_syndrome_and_how_can_you_combat_it" }] }] }] }
};

// Add Image Mapping to Data
const roleImages = {
    pentester: "assets/images/pentester.png",
    blueTeam: "assets/images/blueTeam.png",
    appsec: "assets/images/appsec.png",
    soc: "assets/images/soc.png",
    cloudSec: "assets/images/cloudSec.png",
    forensics: "assets/images/forensics.png",
    grc: "assets/images/grc.png",
    secArch: "assets/images/secArch.png",
    icsSec: "assets/images/icsSec.png",
    aiSec: "assets/images/aiSec.png",
    aiUsage: "assets/images/aiUsage.png",
    bugBounty: "assets/images/bugBounty.png",
    certifications: "assets/images/certifications.png",
    cyberFundamentals: "assets/images/cyberFundamentals.png",
    programming: "assets/images/programming.png",
    softSkills: "assets/images/softSkills.png",
    getHired: "assets/images/getHired.png",
    successMindset: "assets/images/successMindset.png"
};

// Inject images into rolesData
Object.keys(rolesData).forEach(key => {
    if (roleImages[key]) rolesData[key].image = roleImages[key];
});

// State Management
let currentRole = localStorage.getItem('selectedRole') || 'pentester';
let progress = JSON.parse(localStorage.getItem('cyberMapProgress')) || {};
let currentView = 'dashboard';

// DOM Elements
const roadmapContainer = document.getElementById('roadmap-container');
const roleTitle = document.getElementById('role-title');
const roleDescription = document.getElementById('role-description');
const galleryGrid = document.getElementById('roadmap-gallery-grid');
const gallerySection = document.getElementById('roadmap-gallery-section');
const detailSection = document.getElementById('roadmap-detail-section');

// Initialize
function init() {
    renderDashboard();
    renderRoadmapGallery();
    // Default view
    switchView('dashboard');
}

// View Switcher
function switchView(viewId) {
    currentView = viewId;

    // Hide all sections
    document.querySelectorAll('.view-section').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('animate-fade-in');
    });

    // Show selected section
    const activeView = document.getElementById(`view-${viewId}`);
    if (activeView) {
        activeView.classList.remove('hidden');
        void activeView.offsetWidth; // Trigger reflow
        activeView.classList.add('animate-fade-in');
    }

    // Update Nav Buttons
    const navIds = ['dashboard', 'roadmaps', 'about', 'discuss'];
    navIds.forEach(id => {
        const btn = document.getElementById(`nav-${id}`);
        if (id === viewId) {
            btn.classList.remove('text-slate-400', 'hover:text-amber-100', 'hover:bg-slate-800/50', 'border-transparent');
            btn.classList.add('text-amber-400', 'bg-slate-800', 'shadow-[0_0_10px_rgba(0,0,0,0.5)]', 'border-amber-500/20');
        } else {
            btn.classList.add('text-slate-400', 'hover:text-amber-100', 'hover:bg-slate-800/50', 'border-transparent');
            btn.classList.remove('text-amber-400', 'bg-slate-800', 'shadow-[0_0_10px_rgba(0,0,0,0.5)]', 'border-amber-500/20');
        }
    });

    if (viewId === 'roadmaps') {
        showGallery(); // Always start with gallery
    } else if (viewId === 'dashboard') {
        renderDashboard();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchRoleAndNavigate(roleKey) {
    currentRole = roleKey;
    localStorage.setItem('selectedRole', roleKey);

    currentView = 'roadmaps';
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    const roadmapsView = document.getElementById('view-roadmaps');
    roadmapsView.classList.remove('hidden');
    roadmapsView.classList.add('animate-fade-in');

    // Update Nav simple visual fix
    document.getElementById('nav-dashboard').classList.remove('text-amber-400');
    document.getElementById('nav-roadmaps').classList.add('text-amber-400');

    showRole(roleKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Logic for tracking (kept for internal use but not displayed as % on UI)
function getRoleProgress(roleKey) {
    let total = 0;
    let completed = 0;
    rolesData[roleKey].stages.forEach(stage => {
        stage.topics.forEach(topic => {
            total++;
            if (progress[topic.id]) completed++;
        });
    });
    return {
        total,
        completed,
        percent: total === 0 ? 0 : Math.round((completed / total) * 100)
    };
}

function renderDashboard() {
    const statsContainer = document.getElementById('dashboard-stats');
    if (!statsContainer) return;

    statsContainer.innerHTML = '';

    // Emoji Mapping
    const roleEmojis = {
        pentester: "⚔️", blueTeam: "🛡️", appsec: "🔐", soc: "👁️",
        cloudSec: "☁️", forensics: "🔎", grc: "⚖️", secArch: "🏛️",
        icsSec: "🏭", aiSec: "🤖", aiUsage: "🧠", bugBounty: "🐞",
        certifications: "🎓", cyberFundamentals: "🧱", programming: "💻",
        softSkills: "🤝", getHired: "💼", successMindset: "🧘‍♂️"
    };

    Object.keys(rolesData).forEach(key => {
        const role = rolesData[key];
        const emoji = roleEmojis[key] || "🚀";

        const card = document.createElement('div');
        card.className = "bg-slate-900/60 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] hover:-translate-y-1";
        card.onclick = () => switchRoleAndNavigate(key);

        card.innerHTML = `
                    <div class="absolute -top-4 -right-4 p-4 opacity-5 text-9xl font-serif font-bold group-hover:scale-110 transition-transform duration-500 text-slate-500 pointer-events-none select-none">
                        ${key.charAt(0).toUpperCase()}
                    </div>
                    
                    <div class="relative z-10 flex flex-col items-center text-center h-full">
                        <div class="w-14 h-14 rounded-full bg-slate-950/50 border border-slate-700/50 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:border-amber-500/30 group-hover:bg-amber-500/10 transition-all duration-300 shadow-inner">
                            ${emoji}
                        </div>

                        <h3 class="text-xl font-bold text-slate-200 group-hover:text-amber-400 transition-colors font-serif tracking-wide mb-3">${role.title}</h3>
                        
                        <p class="text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3 max-w-sm">${role.description}</p>
                        
                        <div class="mt-auto w-full pt-4 border-t border-slate-800/50 flex justify-center items-center text-xs font-bold font-mono text-amber-500/60 group-hover:text-amber-400 transition-colors uppercase tracking-wider">
                            <span>Explore Path</span>
                            <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </div>
                `;
        statsContainer.appendChild(card);
    });
}

// Render Gallery Grid
function renderRoadmapGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    Object.keys(rolesData).forEach(key => {
        const role = rolesData[key];

        const card = document.createElement('div');
        card.className = "group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] cursor-pointer h-[280px]";
        card.onclick = () => showRole(key);

        card.innerHTML = `
                    <!-- Background Image with Overlay -->
                    <div class="absolute inset-0">
                        <img src="${role.image}" alt="${role.title}" loading="lazy" class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                    </div>

                    <!-- Content -->
                    <div class="absolute inset-0 p-6 flex flex-col justify-end">
                        <div class="transform translate-y-0 transition-transform duration-300">
                            <div class="flex justify-between items-end mb-1">
                                <h3 class="text-2xl font-bold font-serif text-white group-hover:text-amber-400 transition-colors tracking-tight">${role.title}</h3>
                            </div>
                            
                            <div class="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                                <div class="overflow-hidden">
                                     <p class="text-slate-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pt-2">
                                        ${role.description}
                                    </p>
                                    
                                    <div class="flex items-center text-amber-400 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                                        View Roadmap <span class="ml-2">→</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        galleryGrid.appendChild(card);
    });
}

// Show Specific Role (Hide Gallery)
function showRole(roleKey) {
    currentRole = roleKey;
    localStorage.setItem('selectedRole', roleKey);

    gallerySection.classList.add('hidden');
    detailSection.classList.remove('hidden');

    const data = rolesData[roleKey];

    roleTitle.textContent = data.title;
    roleDescription.textContent = data.description;

    renderRoadmap(data.stages);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Back to Gallery
function showGallery() {
    detailSection.classList.add('hidden');
    gallerySection.classList.remove('hidden');
    renderRoadmapGallery();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Save Progress
function saveProgress() {
    localStorage.setItem('cyberMapProgress', JSON.stringify(progress));
}

// Render Roadmap Timeline
function renderRoadmap(stages) {
    if (!roadmapContainer) return;

    roadmapContainer.innerHTML = '';
    roadmapContainer.className = "relative max-w-5xl mx-auto timeline-line py-8";

    let globalIndex = 0;
    stages.forEach((stage) => {
        const badgeContainer = document.createElement('div');
        badgeContainer.className = "flex justify-center mb-12 relative z-20";
        badgeContainer.innerHTML = `
                    <div class="bg-gradient-to-r ${stage.color} text-white px-8 py-2 rounded-full font-bold shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/10 tracking-widest uppercase text-sm font-serif transform hover:scale-105 transition-transform duration-300">
                        ${stage.level}
                    </div>
                `;
        roadmapContainer.appendChild(badgeContainer);

        stage.topics.forEach((topic) => {
            const isLeft = globalIndex % 2 === 0;
            globalIndex++;

            const row = document.createElement('div');
            row.className = `flex flex-col md:flex-row items-center justify-between w-full mb-12 relative z-10 group opacity-0 translate-y-10 transition-all duration-700 ease-out`;
            timelineObserver.observe(row);

            const leftCol = document.createElement('div');
            leftCol.className = "w-full md:w-5/12 order-2 md:order-1 flex md:justify-end pl-14 md:pl-0 pr-4 md:pr-0 box-border";

            const centerCol = document.createElement('div');
            const isCompleted = progress[topic.id];

            centerCol.className = `absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-slate-950 z-20 transition-all duration-500 top-0 md:top-auto mt-[-0.25rem] md:mt-0 shadow-lg ${isCompleted
                ? 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.8)] scale-110'
                : 'bg-slate-700 group-hover:bg-amber-400/50'
                }`;

            const rightCol = document.createElement('div');
            rightCol.className = "w-full md:w-5/12 order-2 md:order-3 flex md:justify-start pl-14 md:pl-8 pr-4 md:pr-0 box-border";

            const card = document.createElement('div');

            const borderColor = isCompleted ? 'border-amber-500/60' : 'border-slate-800';
            const shadowClass = isCompleted ? 'shadow-[0_0_20px_rgba(245,158,11,0.15)]' : 'shadow-lg';

            card.className = `w-full bg-slate-900/90 backdrop-blur-sm p-6 rounded-xl border ${borderColor} transition-all duration-300 ${shadowClass} hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] hover:border-amber-500/40 cursor-pointer overflow-hidden relative group/card`;

            card.setAttribute('role', 'button');
            card.setAttribute('aria-expanded', 'false');

            const checkedState = isCompleted ? 'checked' : '';

            const skillsHtml = topic.skills ? topic.skills.map(skill => `
                        <li class="flex items-center gap-2 text-sm text-slate-300">
                            <span class="text-amber-500 text-xs">✓</span> ${skill}
                        </li>
                    `).join('') : '';

            const resourcesHtml = topic.resources.map(res => {
                const isPremium = res.type === 'premium';
                const badgeColor = !isPremium
                    ? 'bg-emerald-900/30 text-emerald-400 border-emerald-800'
                    : 'bg-amber-900/30 text-amber-400 border-amber-800';
                const badgeIcon = isPremium ? '💎' : '📖';
                const badgeText = isPremium ? 'PREMIUM' : 'FREE';

                return `
                        <li class="flex items-center justify-between text-sm p-2 rounded hover:bg-slate-800/50 transition-colors">
                            <div class="flex items-center gap-2">
                                <span class="text-[0.6rem] px-1.5 py-0.5 rounded border ${badgeColor} font-bold tracking-wider">${badgeText}</span>
                                <a href="${res.link}" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white hover:underline decoration-amber-500/50 underline-offset-4">${res.name}</a>
                            </div>
                            <span class="text-sm opacity-80" title="${isPremium ? 'Premium Resource' : 'Free Resource'}">${badgeIcon}</span>
                        </li>
                        `;
            }).join('');

            card.innerHTML = `
                        <!-- Glow Effect -->
                        <div class="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        
                        <div class="flex justify-between items-start gap-4 relative z-10">
                            <div class="flex-grow">
                                <h3 class="text-lg font-bold font-serif tracking-wide ${isCompleted ? 'text-amber-400' : 'text-slate-100'} group-hover/card:text-amber-400 transition-colors">${topic.title}</h3>
                                <p class="text-slate-400 text-sm mt-2 leading-relaxed transition-all duration-300 line-clamp-2">${topic.content}</p>
                            </div>
                            <div class="flex flex-col items-end gap-3 shrink-0">
                                <label class="checkbox-container p-1 rounded hover:bg-slate-800 cursor-pointer transition-colors" onclick="event.stopPropagation()">
                                    <input type="checkbox" class="w-5 h-5 rounded border-slate-600 text-amber-600 focus:ring-amber-500 focus:ring-offset-slate-900 bg-slate-800 checkbox-gold" data-id="${topic.id}" ${checkedState}>
                                </label>
                                <span class="text-slate-600 group-hover/card:text-amber-500 transform transition-transform duration-300 chevron-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </span>
                            </div>
                        </div>
                        
                        <div class="details-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out relative z-10">
                            <div class="pt-5 mt-5 border-t border-slate-800">
                                <div class="mb-5">
                                    <h4 class="text-xs font-bold text-amber-500 uppercase tracking-widest mb-3">Skills to Learn</h4>
                                    <ul class="grid grid-cols-2 gap-y-2 gap-x-4">
                                        ${skillsHtml}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 class="text-xs font-bold text-amber-500 uppercase tracking-widest mb-3">Recommended Resources</h4>
                                    <ul class="space-y-1">
                                        ${resourcesHtml}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `;

            const checkbox = card.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', (e) => {
                const id = e.target.getAttribute('data-id');
                progress[id] = e.target.checked;
                saveProgress();

                const h3 = card.querySelector('h3');

                if (e.target.checked) {
                    card.classList.remove('border-slate-800', 'shadow-lg');
                    card.classList.add('border-amber-500/60', 'shadow-[0_0_20px_rgba(245,158,11,0.15)]');
                    h3.classList.remove('text-slate-100');
                    h3.classList.add('text-amber-400');
                    centerCol.classList.remove('bg-slate-700', 'group-hover:bg-amber-400/50');
                    centerCol.classList.add('bg-amber-500', 'shadow-[0_0_15px_rgba(245,158,11,0.8)]', 'scale-110');
                } else {
                    card.classList.add('border-slate-800', 'shadow-lg');
                    card.classList.remove('border-amber-500/60', 'shadow-[0_0_20px_rgba(245,158,11,0.15)]');
                    h3.classList.add('text-slate-100');
                    h3.classList.remove('text-amber-400');
                    centerCol.classList.add('bg-slate-700', 'group-hover:bg-amber-400/50');
                    centerCol.classList.remove('bg-amber-500', 'shadow-[0_0_15px_rgba(245,158,11,0.8)]', 'scale-110');
                }
            });

            card.addEventListener('click', (e) => {
                if (e.target.closest('a') || e.target.closest('label')) return;

                const details = card.querySelector('.details-content');
                const p = card.querySelector('p.line-clamp-2');
                const chevron = card.querySelector('.chevron-icon');
                const isExpanded = card.getAttribute('aria-expanded') === 'true';

                if (isExpanded) {
                    card.setAttribute('aria-expanded', 'false');
                    details.style.maxHeight = '0';
                    details.style.opacity = '0';
                    p.classList.remove('hidden');
                    chevron.style.transform = 'rotate(0deg)';
                } else {
                    card.setAttribute('aria-expanded', 'true');
                    details.style.maxHeight = '600px';
                    details.style.opacity = '1';
                    p.classList.add('hidden');
                    chevron.style.transform = 'rotate(180deg)';
                }
            });

            if (isLeft) {
                leftCol.appendChild(card);
            } else {
                rightCol.appendChild(card);
            }

            row.appendChild(leftCol);
            row.appendChild(centerCol);
            row.appendChild(rightCol);
            roadmapContainer.appendChild(row);
        });
    });
}

// Scroll Observer for Timeline Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const timelineObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

init();

