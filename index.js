function getVerdict(facts) {
  let theft = facts.find(fact => fact.type === 'theft');
  let participants = facts.find(fact => fact.type === 'participants');
  let verdict = '';

  if (theft) {
    let damageValue = theft.damageValue;

    if (damageValue < 5000) {
      verdict = 'The suspect can be fined up to 80,000 rubles, or up to six months\' salary, or a compensatory amount of up to six months\' earnings, ' +
      'or they may be sentenced to obligatory labour for up to 360 hours, or correctional labour for up to a year, or deprivation of liberty for up to two years.';
    } else if (damageValue >= 5000 && damageValue <= 250000) {
      verdict = 'The suspect can be fined up to 200,000 rubles, or operators can be subjected to forced labor for up to 5 years, or sentenced for up to 5 years.';
    } else if (damageValue > 250000 && damageValue <= 1000000) {
      verdict = 'The suspect can be fined up to 500,000 rubles, or be subjected to a prison term of up to 6 years, with a fine of up to 80,000 rubles, or a compensatory amount for up to 6 months.' +
      ' and restriction of freedom for up to one and a half years.';
    } else if (damageValue > 1000000) {
      verdict = 'The suspect can be sentenced to up to ten years in prison, or fined up to one million rubles and restricted freedom for up to two years.';
    }
  }

  if (participants) {
    let participantCount = participants.count;
    let hasOrganizer = participants.hasOrganizer;

    if (participantCount <= 1) {
      verdict += '\nThis is an individual responsibility.';
    } else if (participantCount > 1 && !hasOrganizer) {
      verdict += '\nThis is a group responsibility.';
    } else if (participantCount > 1 && hasOrganizer) {
      verdict += '\nThis is an organized group responsibility.';
    }
  }

  return verdict;
}

const cases = [
  [{type: 'theft', damageValue: 3000}, {type: 'participants', count: 1}],
  [{type: 'theft', damageValue: 6000}, {type: 'participants', count: 3}],
  [{type: 'theft', damageValue: 500000}, {type: 'participants', count: 5, hasOrganizer: true}],
  [{type: 'theft', damageValue: 2000000}, {type: 'participants', count: 2, hasOrganizer: false}]
];

for (const c of cases) {
  console.log('Case description:', c);
  console.log('Possible verdict:', getVerdict(c));
  console.log();
}