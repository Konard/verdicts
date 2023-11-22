# verdicts

Law description:
```
УК РФ Статья 158. Кража

1. Кража, то есть тайное хищение чужого имущества, -

наказывается штрафом в размере до восьмидесяти тысяч рублей или в размере заработной платы или иного дохода осужденного за период до шести месяцев, либо обязательными работами на срок до трехсот шестидесяти часов, либо исправительными работами на срок до одного года, либо ограничением свободы на срок до двух лет, либо принудительными работами на срок до двух лет, либо арестом на срок до четырех месяцев, либо лишением свободы на срок до двух лет.

2. Кража, совершенная:

а) группой лиц по предварительному сговору;

б) с незаконным проникновением в помещение либо иное хранилище;

в) с причинением значительного ущерба гражданину;

г) из одежды, сумки или другой ручной клади, находившихся при потерпевшем, -

наказывается штрафом в размере до двухсот тысяч рублей или в размере заработной платы или иного дохода осужденного за период до восемнадцати месяцев, либо обязательными работами на срок до четырехсот восьмидесяти часов, либо исправительными работами на срок до двух лет, либо принудительными работами на срок до пяти лет с ограничением свободы на срок до одного года или без такового, либо лишением свободы на срок до пяти лет с ограничением свободы на срок до одного года или без такового.

3. Кража, совершенная:

а) с незаконным проникновением в жилище;

б) из нефтепровода, нефтепродуктопровода, газопровода;

в) в крупном размере;

Каковы особенности привлечения к ответственности за хищение средств с банковского счета
г) с банковского счета, а равно в отношении электронных денежных средств (при отсутствии признаков преступления, предусмотренного статьей 159.3 настоящего Кодекса),

наказывается штрафом в размере от ста тысяч до пятисот тысяч рублей или в размере заработной платы или иного дохода осужденного за период от одного года до трех лет, либо принудительными работами на срок до пяти лет с ограничением свободы на срок до полутора лет или без такового, либо лишением свободы на срок до шести лет со штрафом в размере до восьмидесяти тысяч рублей или в размере заработной платы или иного дохода осужденного за период до шести месяцев либо без такового и с ограничением свободы на срок до полутора лет либо без такового.

4. Кража, совершенная:

а) организованной группой;

б) в особо крупном размере,

наказывается лишением свободы на срок до десяти лет со штрафом в размере до одного миллиона рублей или в размере заработной платы или иного дохода осужденного за период до пяти лет либо без такового и с ограничением свободы на срок до двух лет либо без такового.

Примечания. 1. Под хищением в статьях настоящего Кодекса понимаются совершенные с корыстной целью противоправные безвозмездное изъятие и (или) обращение чужого имущества в пользу виновного или других лиц, причинившие ущерб собственнику или иному владельцу этого имущества.

2. Значительный ущерб гражданину в статьях настоящей главы, за исключением части пятой статьи 159, определяется с учетом его имущественного положения, но не может составлять менее пяти тысяч рублей.

3. Под помещением в статьях настоящей главы понимаются строения и сооружения независимо от форм собственности, предназначенные для временного нахождения людей или размещения материальных ценностей в производственных или иных служебных целях.

Под хранилищем в статьях настоящей главы понимаются хозяйственные помещения, обособленные от жилых построек, участки территории, трубопроводы, иные сооружения независимо от форм собственности, которые предназначены для постоянного или временного хранения материальных ценностей.

4. Крупным размером в статьях настоящей главы, за исключением частей шестой и седьмой статьи 159, статей 159.1 и 159.5, признается стоимость имущества, превышающая двести пятьдесят тысяч рублей, а особо крупным - один миллион рублей.
```

https://www.consultant.ru/document/cons_doc_LAW_10699/57b5c7b83fcd2cf40cabe2042f2d8f04ed6875ad/

The script for the law:

```js
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
```

Output:

```
Case description: [
  { type: 'theft', damageValue: 3000 },
  { type: 'participants', count: 1 }
]
Possible verdict: The suspect can be fined up to 80,000 rubles, or up to six months' salary, or a compensatory amount of up to six months' earnings, or they may be sentenced to obligatory labour for up to 360 hours, or correctional labour for up to a year, or deprivation of liberty for up to two years.
This is an individual responsibility.

Case description: [
  { type: 'theft', damageValue: 6000 },
  { type: 'participants', count: 3 }
]
Possible verdict: The suspect can be fined up to 200,000 rubles, or operators can be subjected to forced labor for up to 5 years, or sentenced for up to 5 years.
This is a group responsibility.

Case description: [
  { type: 'theft', damageValue: 500000 },
  { type: 'participants', count: 5, hasOrganizer: true }
]
Possible verdict: The suspect can be fined up to 500,000 rubles, or be subjected to a prison term of up to 6 years, with a fine of up to 80,000 rubles, or a compensatory amount for up to 6 months. and restriction of freedom for up to one and a half years.
This is an organized group responsibility.

Case description: [
  { type: 'theft', damageValue: 2000000 },
  { type: 'participants', count: 2, hasOrganizer: false }
]
Possible verdict: The suspect can be sentenced to up to ten years in prison, or fined up to one million rubles and restricted freedom for up to two years.
This is a group responsibility.
```
