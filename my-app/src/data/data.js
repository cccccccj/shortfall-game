const PSdata = [
  [{category:'store',item: 'Raw Materials to Buy',unit:'$590/unit',
    detail:[{name:'Raw Materials Purchase Cost',unit:null},{name:'Raw Storage Cost',unit:null}],line:'3'
  },
  {category:'store',item:'Raw Materials to Store',unit:'$50/unit',
    detail:[{name:'Proj.RS Green Score',unit:'0/unit'}]
  }],
  [{category:'produce',item:'Materials to Produce',unit:'$100/unit',
    detail:[{name:'Material Production Cost',unit:null},{name:'Proj.Waste Produced',unit:'3/unit'}],line:'4'
  },
  {category:'produce',item:'Production Storage',unit:'$50/unit',
    detail:[{name:'Unit Storage Cost',unit:null},{name:'Proj.US Green Score',unit:'0/unit'}]
  }],
  [{category:'sell',item:'Materials to Sell',unit:'$1090/unit',
    detail:[{name:'Materials Sale Projected Income',unit:null}],line:'1'
  }],
  [{category:'waste',item:'Waste to Remove',unit:'$100/unit',
    detail:[{name:'Waste Removal Cost',unit:null},{name:'Proj.WR Green Score',unit:'2/unit'}],line:'4'
  },
  {category:'waste',item:'Waste Storage',unit:'$50/unit',
    detail:[{name:'Waste Storage Cost',unit:null},{name:'Proj.WS Green Score',unit:'-1/unit'}]
  }]
];
const CMVdata = [
  {category: 'Raw Materials Price', color: '#8ABED8', current: '$590', net: '$0'},
  {category: 'Materials Sell Price', color: '#2A8039',current: '$1090', net: '$0'},
  {category: 'Parts Sell Price', color: '#FF8522',current: '$1590', net: '$0'},
  {category: 'Cars Sell Price', color: '#DC3522',current: '$2090', net: '$0'},
  {category: 'Max Buy Amount', color: '#8ABED8',current: '9', net: '0'},
  {category: 'Max Buy Amount', color: '#8ABED8',current: null, net: null}
];
const rulesData = [
    {id:'0',title:'Setup',content:'Your team has purchased three factories in a supply chain: a Materials producer, a Parts producer, and a Cars producer. The factories still have some supplies in storage from past production, but as the new managers of each of these companies, your team will have to work together to produce the most efficient supply chain and provide all is members with sufficient resources each round.'},
    {id:'1',title:'Scoring',content:'Divide players into teams consisting of 3 or more people per team.  There must be at least two teams.In teams of 3, each player will manage a tier of the supply chain.  In teams of more than 3, players will share management of their tier. They may divide up the decision-making as they see fit, but close collaboration is encouraged.Assign each player to one of the 3 tiers of the supply chain: Materials (2nd Tier), Parts (1st Tier), or Cars (OEM). Each team must have at least one player assigned to each tier of the supply chain.'},
    {id:'2',title:'Getting help',content:'Popup tutorial information will appear during the first round of the game. This feature can be disabled by switch off the Tutorial button below. You can re-enable the tutorial for the next turn phase by switching on the button again.\n In addition, at any time during the game, you can bring up the RULES screen, which offers detailed rules for the entire game.'},
    {id:'3',title:'Game Play Overview',content:"A full game consists of 10 rounds for every team. Within a round, each player on your team (Materials, Parts, and Cars) takes one turn. Each team operates on a single computer. When a player is finished with his or her turn, he or she gives control to the next team-member. After ten rounds, report your team's scores to the facilitator, who will determine the overall winner among teams."},
    {id:'4',title:'Current Market Values',content:'The first phase of each round is a display of the current market values. This table will show you:...'},
    {id:'5',title:'Technological Innovations',content:'This step allows you to implement a new technology in your factory each turn. Use the buttons at the top to view the three technology trees, which offer improvements in the areas of production, storage and waste. As you accumulate innovations you will unlock more options further down each of the three trees.'},
    {id:'6',title:'Production and Sales',content:"Four major decisions are made on this screen. The current tier increases or decreases the number of units to purchase, produce, and sell, and decides how much waste to remove versus store. All information is updated on the screen as changes in projections are made, but nothing is finalized until the 'next' button is pressed.If a unit's data turns red, this indicates a finance or capacity problem that must be resolved before play can continue."},
    {id:'7',title:'Current Event',content:'At the end of each round, an event occurs that will affect game play for the next round. These events can affect one or all tiers of your team. All teams playing the same game number will see the same current events.'},
    {id:'8',title:'Current Score',content:"Before a new round begins, your team's combined scores are displayed. These are the components of the final scores that determine the game's winner after ten rounds."},
    {id:'9',title:'Game End',content:'Winning: There are four final scores: Total Profits, Green Score, Profit Per Car, and Waste Disposal Cost Efficiency. The team that achieves the greatest number of best scores wins. For example, in a four-team game, if one team scores highest in two areas and two other teams score highest in only one area each, then the team scoring highest in two areas wins.'}
];
const TIdata = [
    {name:'Production', content:[
        {level :{title:'Production Level 1',note:'Complete 2 of these innovations to unlock Level 2'}, chose1:{title:'Emission Control',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet Clean Air Act requiements.'},chose2:{title:'BOF Dust Recycling',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA. Zinc can be reused and avoids.'},chose3:{title:'Energy Reduction',note:'Investment in heat recovery and recircilation equipment is used to capture to save energy.'}, lock : false},
        {level :{title:'Production Level 2',note:'Complete 1 of these innovations to unlock Level 3'}, chose1:{title:'PFC Emissions',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet Clean Air Act requiements.'},chose2:{title:'Lightweighting',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA.'},chose3:{title:null,note:null},lock : true},
        {level :{title:'Production Level 3',note:'Complete 1 of these innovations plus 1 in each other category to unlock Mastery'}, chose1:{title:'EStrip Casting',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet..'},chose2:{title:'Glass Replacement',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA...'},chose3:{title:null,note:null}, lock : true},
        {level :{title:'Mastery requires:',note:'Storage Level1 Waste Level1'}, chose1:{title:'Electrolytic Cell Technology',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet..'},chose2:{title:null,note:null},chose3:{title:null,note:null},lock : true}
    ]},
    {name:'Storage', content:[
        {level :{title:'Storage Level 1',note:'Complete 2 of these innovations to unlock Level 2'}, chose1:{title:'Just In Time',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet Clean Air Act requiements.'},chose2:{title:'AGV',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA. Zinc can be reused and avoids.'},chose3:{title:'KANBAN',note:'Investment in heat recovery and recircilation equipment is used to capture to save energy.'},lock : false},
        {level :{title:'Storage Level 2',note:'Complete 1 of these innovations to unlock Level 3'}, chose1:{title:'PFC Emissions',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet Clean Air Act requiements.'},chose2:{title:'Lightweighting',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA.'},chose3:{title:null,note:null},lock : true},
        {level :{title:'Storage Level 3',note:'Complete 1 of these innovations plus 1 in each other category to unlock Mastery'}, chose1:{title:'EStrip Casting',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet..'},chose2:{title:'Glass Replacement',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA...'},chose3:{title:null,note:null},lock : true},
        {level :{title:'Mastery requires:',note:'Production Level1 Waste Level1'}, chose1:{title:'Electrolytic Cell Technology',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet..'},chose2:{title:null,note:null},chose3:{title:null,note:null},lock : true}
    ]},
    {name:'Waste', content:[
        {level :{title:'Waste Level 1',note:'Complete 2 of these innovations to unlock Level 2'}, chose1:{title:'Scrp Segregation',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet Clean Air Act requiements.'},chose2:{title:'AGV',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA. Zinc can be reused and avoids.'},chose3:{title:'Plastics Recycling',note:'Reuse of plastic containers and bins used in shipping leads to reduced packaging costs.'},lock : false},
        {level :{title:'Waste Level 2',note:'Complete 1 of these innovations to unlock Level 3'}, chose1:{title:'PFC Emissions',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet Clean Air Act requiements.'},chose2:{title:'Lightweighting',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA.'},chose3:{title:null,note:null},lock : true},
        {level :{title:'Waste Level 3',note:'Complete 1 of these innovations plus 1 in each other category to unlock Mastery'}, chose1:{title:'EStrip Casting',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet..'},chose2:{title:'Glass Replacement',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA...'},chose3:{title:null,note:null},lock : true},
        {level :{title:'Mastery requires:',note:'Production Level1 Storage Level1'}, chose1:{title:'Electrolytic Cell Technology',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet..'},chose2:{title:null,note:null},chose3:{title:null,note:null},lock : true}
    ]}
];
export {PSdata,CMVdata,rulesData,TIdata};
