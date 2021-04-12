// You can add new scenarios, but make sure that there is exactly...
// * 1 hackerCard per scenario
// * 3 playerCards per scenario

var scenarios = [
  {
    hackerCard : {
      description : "I set up a fake Wi-Fi station to steal people’s email and track them online.",
      power : 4,
    },
    playerCards : [
      {
        description : "I never use public wifi networks.",
        power : 5,
      },
      {
        description : "I browse the web, but I never do any personal business on a public wifi network.",
        power : 3,
      },
      {
        description : "I connect to any wifi network I can use in public.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I sent a fake email from your bank asking for your account details.",
      power : 3,
    },
    playerCards : [
      {
        description : "I checked the email address - the message didn’t come from my bank.",
        power : 5,
      },
      {
        description : "I never give out personal information in response to an email.",
        power : 4,
      },
      {
        description : "I sent the details you asked for so you could check on my account.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I figured out where you live from all the personal information you share on social media.",
      power : 3,
    },
    playerCards : [
      {
        description : "I never share personal information on my social media accounts.",
        power : 5,
      },
      {
        description : "I keep my accounts private so only my friends can see them.",
        power : 4,
      },
      {
        description : "I tag everything so my friends always know what I’m doing.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I watched you type your password and hacked your account.",
      power : 2,
    },
    playerCards : [
      {
        description : "I use different passwords for all of my other accounts.",
        power : 4,
      },
      {
        description : "I changed my password on all of my accounts because they are the same.",
        power : 2,
      },
      {
        description : "I deleted that account and started a new one. ",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I looked at your browsing history on your phone to see what you do online.",
      power : 2,
    },
    playerCards : [
      {
        description : "I always use a private browser that never keeps my history.",
        power : 4,
      },
      {
        description : "I set my browser to delete my history every time I quit. ",
        power : 3,
      },
      {
        description : "I never clear my browser history because I don’t like typing in big web addresses.",
        power : 1,
      }
    ]
  }, 

  {
    hackerCard : {
      description : "I hacked your system and all your data is deleted now.",
      power : 2,
    },
    playerCards : [
      {
        description : "I follow the 3-2-1 backup rule. I have on-site as well as off-site location (cloud storage) backup.",
        power : 4,
      },
      {
        description : "I have my data backed up in local and external hard drive.",
        power : 3,
      },
      {
        description : "I never backed up my data in any way.",
        power : 1,
      }
    ]
  }, 

  {
    hackerCard : {
      description : "I provided you my USB for content transfer.",
      power : 2,
    },
    playerCards : [
      {
        description : "I use Anti-Virus Protection & Firewall to protect my system.",
        power : 4,
      },
      {
        description : "I refused to use your USB as my system was not having Anti-Virus Protection & Firewall.",
        power : 3,
      },
      {
        description : "I used your USB as I am not afraid of my system getting corrupted.",
        power : 1,
      }
    ]
  }, 
  {
    hackerCard : {
      description : "I will crash your vulnerable system using ransomware attacks, malware and data breaches.",
      power : 2,
    },
    playerCards : [
      {
        description : "You can't because I have turned on Automatic Updates for my operating system.",
        power : 4,
      },
      {
        description : "I use web browsers such as Chrome or Firefox that receive frequent, automatic security updates.",
        power : 3,
      },
      {
        description : "I don't update my softwares nor do I download security updates.",
        power : 1,
      }
    ]
  }
];