var attackPatterns = 
{
    "objects": [
     {
        "id": "attack-pattern--01df3350-ce05-4bdf-bdf8-0a919a66d4a8",
        "created_by_ref": "identity--c78cb6e5-0c4b-4611-8297-d1b8b55e40b5",
        "name": ".bash_profile and .bashrc",
        "description": "<code>~/.bash_profile</code> and <code>~/.bashrc</code> are executed in a user's context when a new shell opens or when a user logs in so that their environment is set correctly. <code>~/.bash_profile</code> is executed for login shells and <code>~/.bashrc</code> is executed for interactive non-login shells. This means that when a user logs in (via username and password) to the console (either locally or remotely via something like SSH), <code>~/.bash_profile</code> is executed before the initial command prompt is returned to the user. After that, every time a new shell is opened, <code>~/.bashrc</code> is executed. This allows users more fine grained control over when they want certain commands executed.\n\nMac's Terminal.app is a little different in that it runs a login shell by default each time a new terminal window is opened, thus calling <code>~/.bash_profile</code> each time instead of <code>~/.bashrc</code>.\n\nThese files are meant to be written to by the local user to configure their own environment; however, adversaries can also insert code into these files to gain persistence each time a user logs in or opens a new shell  (Citation: amnesia malware).",
        "external_references": [
            {
                "external_id": "T1156",
                "url": "https://attack.mitre.org/techniques/T1156",
                "source_name": "mitre-attack"
            },
            {
                "url": "https://researchcenter.paloaltonetworks.com/2017/04/unit42-new-iotlinux-malware-targets-dvrs-forms-botnet/",
                "description": "Claud Xiao, Cong Zheng, Yanhui Jia. (2017, April 6). New IoT/Linux Malware Targets DVRs, Forms Botnet. Retrieved February 19, 2018.",
                "source_name": "amnesia malware"
            }
        ],
        "object_marking_refs": [
            "marking-definition--fa42a846-8d90-4e51-bc29-71d5b4802168"
        ],
        "x_mitre_version": "1.0",
        "x_mitre_data_sources": [
            "File monitoring",
            "Process monitoring",
            "Process command-line parameters",
            "Process use of network"
        ],
        "x_mitre_detection": "While users may customize their <code>~/.bashrc</code> and <code>~/.bash_profile</code> files , there are only certain types of commands that typically appear in these files. Monitor for abnormal commands such as execution of unknown programs, opening network sockets, or reaching out across the network when user profiles are loaded during the login process.",
        "x_mitre_permissions_required": [
            "User",
            "Administrator"
        ],
        "x_mitre_platforms": [
            "Linux",
            "macOS"
        ],
        "type": "attack-pattern",
        "kill_chain_phases": [
            {
                "phase_name": "persistence",
                "kill_chain_name": "mitre-attack"
            }
        ],
        "modified": "2018-10-31T13:45:13.024Z",
        "created": "2017-12-14T16:46:06.044Z"
    },
    {
        "id": "attack-pattern--dcaa092b-7de9-4a21-977f-7fcb77e89c48",
        "created_by_ref": "identity--c78cb6e5-0c4b-4611-8297-d1b8b55e40b5",
        "name": "Access Token Manipulation",
        "description": "Windows uses access tokens to determine the ownership of a running process. A user can manipulate access tokens to make a running process appear as though it belongs to someone other than the user that started the process. When this occurs, the process also takes on the security context associated with the new token. For example, Microsoft promotes the use of access tokens as a security best practice. Administrators should log in as a standard user but run their tools with administrator privileges using the built-in access token manipulation command <code>runas</code>. (Citation: Microsoft runas)\n  \nAdversaries may use access tokens to operate under a different user or system security context to perform actions and evade detection. An adversary can use built-in Windows API functions to copy access tokens from existing processes; this is known as token stealing. An adversary must already be in a privileged user context (i.e. administrator) to steal a token. However, adversaries commonly use token stealing to elevate their security context from the administrator level to the SYSTEM level. An adversary can use a token to authenticate to a remote system as the account for that token if the account has appropriate permissions on the remote system. (Citation: Pentestlab Token Manipulation)\n\nAccess tokens can be leveraged by adversaries through three methods: (Citation: BlackHat Atkinson Winchester Token Manipulation)\n\n**Token Impersonation/Theft** - An adversary creates a new access token that duplicates an existing token using <code>DuplicateToken(Ex)</code>. The token can then be used with <code>ImpersonateLoggedOnUser</code> to allow the calling thread to impersonate a logged on user's security context, or with <code>SetThreadToken</code> to assign the impersonated token to a thread. This is useful for when the target user has a non-network logon session on the system.\n\n**Create Process with a Token** - An adversary creates a new access token with <code>DuplicateToken(Ex)</code> and uses it with <code>CreateProcessWithTokenW</code> to create a new process running under the security context of the impersonated user. This is useful for creating a new process under the security context of a different user.\n\n**Make and Impersonate Token** - An adversary has a username and password but the user is not logged onto the system. The adversary can then create a logon session for the user using the <code>LogonUser</code> function. The function will return a copy of the new session's access token and the adversary can use <code>SetThreadToken</code> to assign the token to a thread.\n\nAny standard user can use the <code>runas</code> command, and the Windows API functions, to create impersonation tokens; it does not require access to an administrator account.\n\nMetasploit\u2019s Meterpreter payload allows arbitrary token manipulation and uses token impersonation to escalate privileges. (Citation: Metasploit access token)  The Cobalt Strike beacon payload allows arbitrary token impersonation and can also create tokens. (Citation: Cobalt Strike Access Token)",
        "external_references": [
            {
                "external_id": "T1134",
                "url": "https://attack.mitre.org/techniques/T1134",
                "source_name": "mitre-attack"
            },
            {
                "url": "https://technet.microsoft.com/en-us/library/bb490994.aspx",
                "description": "Microsoft TechNet. (n.d.). Runas. Retrieved April 21, 2017.",
                "source_name": "Microsoft runas"
            },
            {
                "url": "https://www.offensive-security.com/metasploit-unleashed/fun-incognito/",
                "description": "Offensive Security. (n.d.). What is Incognito. Retrieved April 21, 2017.",
                "source_name": "Metasploit access token"
            },
            {
                "url": "https://msdn.microsoft.com/en-us/library/windows/desktop/aa378184(v=vs.85).aspx",
                "description": "Microsoft TechNet. (n.d.). Retrieved April 25, 2017.",
                "source_name": "Microsoft LogonUser"
            },
            {
                "url": "https://msdn.microsoft.com/en-us/library/windows/desktop/aa446617(v=vs.85).aspx",
                "description": "Microsoft TechNet. (n.d.). Retrieved April 25, 2017.",
                "source_name": "Microsoft DuplicateTokenEx"
            },
            {
                "url": "https://msdn.microsoft.com/en-us/library/windows/desktop/aa378612(v=vs.85).aspx",
                "description": "Microsoft TechNet. (n.d.). Retrieved April 25, 2017.",
                "source_name": "Microsoft ImpersonateLoggedOnUser"
            },
            {
                "url": "https://pentestlab.blog/2017/04/03/token-manipulation/",
                "description": "netbiosX. (2017, April 3). Token Manipulation. Retrieved April 21, 2017.",
                "source_name": "Pentestlab Token Manipulation"
            },
            {
                "url": "https://blog.cobaltstrike.com/2015/12/16/windows-access-tokens-and-alternate-credentials/",
                "description": "Mudge, R. (n.d.). Windows Access Tokens and Alternate Credentials. Retrieved April 21, 2017.",
                "source_name": "Cobalt Strike Access Token"
            },
            {
                "url": "https://technet.microsoft.com/en-us/windows-server-docs/identity/ad-ds/manage/component-updates/command-line-process-auditing",
                "description": "Mathers, B. (2017, March 7). Command line process auditing. Retrieved April 21, 2017.",
                "source_name": "Microsoft Command-line Logging"
            },
            {
                "url": "https://www.blackhat.com/docs/eu-17/materials/eu-17-Atkinson-A-Process-Is-No-One-Hunting-For-Token-Manipulation.pdf",
                "description": "Atkinson, J., Winchester, R. (2017, December 7). A Process is No One: Hunting for Token Manipulation. Retrieved December 21, 2017.",
                "source_name": "BlackHat Atkinson Winchester Token Manipulation"
            }
        ],
        "object_marking_refs": [
            "marking-definition--fa42a846-8d90-4e51-bc29-71d5b4802168"
        ],
        "x_mitre_version": "1.0",
        "x_mitre_contributors": [
            "Tom Ueltschi @c_APT_ure",
            "Travis Smith, Tripwire",
            "Robby Winchester, @robwinchester3",
            "Jared Atkinson, @jaredcatkinson"
        ],
        "x_mitre_data_sources": [
            "API monitoring",
            "Access tokens",
            "Process monitoring",
            "Process command-line parameters"
        ],
        "x_mitre_detection": "If an adversary is using a standard command-line shell, analysts can detect token manipulation by auditing command-line activity. Specifically, analysts should look for use of the <code>runas</code> command. Detailed command-line logging is not enabled by default in Windows. (Citation: Microsoft Command-line Logging)\n\nIf an adversary is using a payload that calls the Windows token APIs directly, analysts can detect token manipulation only through careful analysis of user network activity, examination of running processes, and correlation with other endpoint and network behavior. \n\nThere are many Windows API calls a payload can take advantage of to manipulate access tokens (e.g., <code>LogonUser</code> (Citation: Microsoft LogonUser), <code>DuplicateTokenEx</code> (Citation: Microsoft DuplicateTokenEx), and <code>ImpersonateLoggedOnUser</code> (Citation: Microsoft ImpersonateLoggedOnUser)). Please see the referenced Windows API pages for more information.\n\nQuery systems for process and thread token information and look for inconsistencies such as user owns processes impersonating the local SYSTEM account. (Citation: BlackHat Atkinson Winchester Token Manipulation)",
        "x_mitre_permissions_required": [
            "User",
            "Administrator"
        ],
        "x_mitre_effective_permissions": [
            "SYSTEM"
        ],
        "x_mitre_platforms": [
            "Windows"
        ],
        "type": "attack-pattern",
        "kill_chain_phases": [
            {
                "phase_name": "defense-evasion",
                "kill_chain_name": "mitre-attack"
            },
            {
                "phase_name": "privilege-escalation",
                "kill_chain_name": "mitre-attack"
            }
        ],
        "modified": "2018-10-31T13:45:13.024Z",
        "created": "2017-12-14T16:46:06.044Z"
    },
    {
        "id": "attack-pattern--9b99b83a-1aac-4e29-b975-b374950551a3",
        "created_by_ref": "identity--c78cb6e5-0c4b-4611-8297-d1b8b55e40b5",
        "name": "Accessibility Features",
        "description": "Windows contains accessibility features that may be launched with a key combination before a user has logged in (for example, when the user is on the Windows logon screen). An adversary can modify the way these programs are launched to get a command prompt or backdoor without logging in to the system.\n\nTwo common accessibility programs are <code>C:\\Windows\\System32\\sethc.exe</code>, launched when the shift key is pressed five times and <code>C:\\Windows\\System32\\utilman.exe</code>, launched when the Windows + U key combination is pressed. The sethc.exe program is often referred to as \"sticky keys\", and has been used by adversaries for unauthenticated access through a remote desktop login screen. (Citation: FireEye Hikit Rootkit)\n\nDepending on the version of Windows, an adversary may take advantage of these features in different ways because of code integrity enhancements. In newer versions of Windows, the replaced binary needs to be digitally signed for x64 systems, the binary must reside in <code>%systemdir%\\</code>, and it must be protected by Windows File or Resource Protection (WFP/WRP). (Citation: DEFCON2016 Sticky Keys) The debugger method was likely discovered as a potential workaround because it does not require the corresponding accessibility feature binary to be replaced. Examples for both methods:\n\nFor simple binary replacement on Windows XP and later as well as and Windows Server 2003/R2 and later, for example, the program (e.g., <code>C:\\Windows\\System32\\utilman.exe</code>) may be replaced with \"cmd.exe\" (or another program that provides backdoor access). Subsequently, pressing the appropriate key combination at the login screen while sitting at the keyboard or when connected over [Remote Desktop Protocol](https://attack.mitre.org/techniques/T1076) will cause the replaced file to be executed with SYSTEM privileges. (Citation: Tilbury 2014)\n\nFor the debugger method on Windows Vista and later as well as Windows Server 2008 and later, for example, a Registry key may be modified that configures \"cmd.exe,\" or another program that provides backdoor access, as a \"debugger\" for the accessibility program (e.g., \"utilman.exe\"). After the Registry is modified, pressing the appropriate key combination at the login screen while at the keyboard or when connected with RDP will cause the \"debugger\" program to be executed with SYSTEM privileges. (Citation: Tilbury 2014)\n\nOther accessibility features exist that may also be leveraged in a similar fashion: (Citation: DEFCON2016 Sticky Keys)\n\n* On-Screen Keyboard: <code>C:\\Windows\\System32\\osk.exe</code>\n* Magnifier: <code>C:\\Windows\\System32\\Magnify.exe</code>\n* Narrator: <code>C:\\Windows\\System32\\Narrator.exe</code>\n* Display Switcher: <code>C:\\Windows\\System32\\DisplaySwitch.exe</code>\n* App Switcher: <code>C:\\Windows\\System32\\AtBroker.exe</code>",
        "external_references": [
            {
                "external_id": "T1015",
                "url": "https://attack.mitre.org/techniques/T1015",
                "source_name": "mitre-attack"
            },
            {
                "external_id": "CAPEC-558",
                "url": "https://capec.mitre.org/data/definitions/558.html",
                "source_name": "capec"
            },
            {
                "url": "http://blog.crowdstrike.com/registry-analysis-with-crowdresponse/",
                "description": "Tilbury, C. (2014, August 28). Registry Analysis with CrowdResponse. Retrieved November 12, 2014.",
                "source_name": "Tilbury 2014"
            },
            {
                "url": "https://www.fireeye.com/blog/threat-research/2012/08/hikit-rootkit-advanced-persistent-attack-techniques-part-1.html",
                "description": "Glyer, C., Kazanciyan, R. (2012, August 20). THE \u201cHIKIT\u201d ROOTKIT: ADVANCED AND PERSISTENT ATTACK TECHNIQUES (PART 1). Retrieved June 6, 2016.",
                "source_name": "FireEye Hikit Rootkit"
            },
            {
                "url": "https://www.slideshare.net/DennisMaldonado5/sticky-keys-to-the-kingdom",
                "description": "Maldonado, D., McGuffin, T. (2016, August 6). Sticky Keys to the Kingdom. Retrieved July 5, 2017.",
                "source_name": "DEFCON2016 Sticky Keys"
            }
        ],
        "object_marking_refs": [
            "marking-definition--fa42a846-8d90-4e51-bc29-71d5b4802168"
        ],
        "x_mitre_version": "1.0",
        "x_mitre_contributors": [
            "Paul Speulstra, AECOM Global Security Operations Center"
        ],
        "x_mitre_data_sources": [
            "Windows Registry",
            "File monitoring",
            "Process monitoring"
        ],
        "x_mitre_detection": "Changes to accessibility utility binaries or binary paths that do not correlate with known software, patch cycles, etc., are suspicious. Command line invocation of tools capable of modifying the Registry for associated keys are also suspicious. Utility arguments and the binaries themselves should be monitored for changes. Monitor Registry keys within <code>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options</code>.",
        "x_mitre_effective_permissions": [
            "SYSTEM"
        ],
        "x_mitre_permissions_required": [
            "Administrator"
        ],
        "x_mitre_platforms": [
            "Windows"
        ],
        "type": "attack-pattern",
        "kill_chain_phases": [
            {
                "phase_name": "persistence",
                "kill_chain_name": "mitre-attack"
            },
            {
                "phase_name": "privilege-escalation",
                "kill_chain_name": "mitre-attack"
            }
        ],
        "modified": "2018-10-17T00:14:20.652Z",
        "created": "2017-05-31T21:30:26.946Z"
     }
    ]
}

export const fetchAttackPatterns = () => {
    debugger
    return {type: 'FETCH_ATTACK_PATTERNS', attackPatterns}
}