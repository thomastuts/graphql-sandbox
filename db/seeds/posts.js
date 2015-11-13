exports.seed = function(knex) {
  return Promise.all([
    knex('posts').del(),

    knex('posts').insert([
      {
        "id": 1,
        "author_id": 1,
        "title": "incididunt ea nostrud voluptate exercitation",
        "content": "Et exercitation do incididunt do aliqua Lorem esse voluptate consequat id amet ex ea dolore. Et non reprehenderit eiusmod labore qui eiusmod sunt sint non minim reprehenderit culpa laboris. Cillum ut voluptate dolore consectetur pariatur esse consectetur ullamco. Incididunt non excepteur anim laborum ex officia fugiat amet. Ullamco eu aliqua culpa laborum ipsum amet nulla. Nulla magna occaecat irure ut fugiat pariatur laboris.\r\nSint in ex mollit ad et nisi duis deserunt. Quis nostrud excepteur duis consequat aliquip ad sit ullamco commodo consectetur. Duis excepteur nisi fugiat ex ad ullamco anim culpa veniam minim est pariatur sint pariatur. Labore incididunt incididunt aliquip officia amet reprehenderit aliqua reprehenderit culpa minim culpa officia ipsum esse.\r\nIrure minim non officia deserunt. Duis aliquip ut dolor veniam eu dolor adipisicing duis dolore officia nulla commodo enim. Pariatur ex reprehenderit commodo consectetur eu velit.\r\nVeniam enim veniam proident nulla mollit do eu. Proident esse ullamco duis non commodo culpa mollit consectetur. Mollit consequat tempor occaecat sunt adipisicing. Consectetur aliqua in irure reprehenderit sunt. Consequat occaecat voluptate irure mollit in nisi aute labore. Anim laboris nulla minim ea sint veniam labore cillum magna est ea sint pariatur amet. Ipsum fugiat ad amet ad non excepteur nostrud irure.\r\n"
      },
      {
        "id": 2,
        "author_id": 1,
        "title": "excepteur ipsum occaecat commodo nostrud",
        "content": "Do reprehenderit nostrud reprehenderit minim deserunt cillum eiusmod pariatur id excepteur sit qui ut cillum. Lorem incididunt nisi eu duis qui aute cupidatat consequat dolore eu enim. Ex adipisicing ullamco magna minim ipsum.\r\nDolor cillum amet cupidatat consequat nostrud. Lorem qui consequat adipisicing reprehenderit dolore. Ea ullamco nulla pariatur exercitation pariatur ullamco dolor tempor in eiusmod veniam magna. Eu qui officia excepteur dolore voluptate cupidatat duis nisi sint ut. Pariatur excepteur eu ex laborum commodo mollit sunt ea ullamco proident quis consequat. Minim aute deserunt irure est ex duis non eu exercitation esse sint velit.\r\nDo voluptate exercitation aute voluptate id aliqua. Laborum nulla Lorem anim qui ipsum minim et et velit incididunt nulla excepteur. Ut ea exercitation duis aliqua eu consectetur ut adipisicing mollit incididunt. Deserunt anim deserunt ut incididunt proident nisi excepteur excepteur officia voluptate exercitation laboris.\r\nIpsum velit nisi dolore nostrud aliqua Lorem do duis. Adipisicing esse occaecat sit quis eu qui minim velit pariatur aute irure culpa excepteur. Ut magna Lorem non laborum ipsum sint officia elit consectetur sint ut.\r\n"
      },
      {
        "id": 3,
        "author_id": 2,
        "title": "laborum in magna occaecat aliquip",
        "content": "Occaecat irure qui ex pariatur. Excepteur est adipisicing deserunt ullamco. Duis sunt veniam veniam anim irure laborum irure magna ullamco eu occaecat ipsum irure exercitation. Et pariatur ipsum cupidatat velit. Irure aliquip non non magna velit laborum ullamco mollit. Aute ut voluptate dolor cillum. Sit incididunt eiusmod et labore adipisicing aliqua ex ex sint eu irure sunt mollit.\r\nLaborum deserunt proident dolore proident proident nostrud amet excepteur dolore Lorem ex sunt ut. Ipsum magna sint in in incididunt Lorem adipisicing laboris culpa deserunt. Nisi occaecat consequat sunt veniam dolore et adipisicing Lorem eiusmod. Nisi consequat laborum Lorem sit velit ullamco mollit incididunt ad nulla. Minim incididunt ex irure nulla esse ut ipsum cillum enim laborum do irure cillum. Aute consequat quis nulla anim duis tempor cillum fugiat. Consectetur excepteur cupidatat qui consectetur adipisicing eiusmod mollit ad amet sit.\r\nDolor voluptate aliqua do eiusmod. Elit nulla magna fugiat do excepteur occaecat elit cillum incididunt proident nisi deserunt duis. Ex laborum eiusmod sint magna elit qui nulla.\r\nEnim reprehenderit velit pariatur Lorem ex aliqua laborum. Aliqua est cillum labore eiusmod aliqua occaecat reprehenderit tempor aliqua cillum cupidatat. Cupidatat sit ex nostrud aliquip reprehenderit consectetur id incididunt occaecat est. Ad id pariatur veniam aliquip reprehenderit Lorem anim ad dolor in consequat fugiat. Proident cillum ex officia reprehenderit exercitation dolor. Enim est fugiat excepteur aute consectetur aute proident mollit mollit minim ut commodo non incididunt. Est occaecat dolore occaecat et occaecat sunt consequat sunt consectetur veniam exercitation do.\r\n"
      },
      {
        "id": 4,
        "author_id": 3,
        "title": "ex irure voluptate nulla sint",
        "content": "Deserunt occaecat minim minim magna nostrud officia eu quis consequat nostrud consequat ut. Reprehenderit ipsum qui laboris qui reprehenderit proident cillum anim et pariatur nulla. Nisi voluptate duis mollit sunt nostrud id velit ea ex duis qui fugiat.\r\nAute aliqua reprehenderit quis irure. Mollit labore mollit in esse voluptate exercitation labore nulla exercitation duis tempor dolor esse. Veniam tempor fugiat Lorem tempor nostrud. Dolore qui ad veniam dolor exercitation dolor dolore veniam eu anim velit eiusmod nisi nulla. Laborum labore culpa pariatur excepteur eiusmod ex nulla enim do id incididunt labore. Minim irure ut laboris esse cillum tempor. Ea eu commodo nisi proident culpa exercitation.\r\nMagna commodo nulla veniam duis ea anim do deserunt eu cillum quis. Aliquip esse nulla sint qui laboris ipsum sit ut elit velit consectetur ut officia. Adipisicing commodo id cupidatat cillum et. Minim minim officia et id. Veniam proident officia culpa qui magna voluptate ex et enim consequat est pariatur excepteur consectetur. Eu sunt deserunt amet mollit velit mollit duis pariatur qui elit aute nisi anim nostrud.\r\nDeserunt ex qui mollit nulla magna. Dolore culpa fugiat irure excepteur commodo ea dolore dolore incididunt aliquip. Consectetur non cillum exercitation ad commodo proident laboris reprehenderit culpa. Fugiat nostrud consectetur in incididunt sunt culpa esse. Fugiat fugiat ut irure Lorem cillum sit fugiat enim cillum. Ut duis veniam enim do mollit exercitation ex ea amet irure minim deserunt labore occaecat.\r\n"
      },
      {
        "id": 5,
        "author_id": 5,
        "title": "anim proident esse velit officia",
        "content": "Lorem veniam anim occaecat ipsum do est. Incididunt aliqua mollit laborum eiusmod ipsum dolor ad excepteur proident culpa. Labore est labore Lorem eu anim et non. Ea reprehenderit esse laboris sit occaecat incididunt sunt sunt fugiat quis minim irure ea. Laborum esse est labore ex cupidatat qui reprehenderit tempor consectetur. Sunt occaecat elit commodo excepteur ipsum tempor cupidatat id dolor magna mollit non ut. Non aute adipisicing enim voluptate eu deserunt aliquip cillum non.\r\nVelit ipsum duis sint esse tempor. Nisi dolore aliquip officia et id proident Lorem laborum amet nulla aliquip est velit. Ad incididunt aliqua qui labore eiusmod cillum voluptate mollit cupidatat dolor est. Do ea sit laborum consectetur velit sint id voluptate sit ut laborum dolor. Dolor quis laborum aliquip non aliquip cupidatat culpa nulla commodo nulla. Aliqua veniam amet quis voluptate cillum nisi. Consequat aute dolore labore nulla pariatur qui est irure veniam.\r\nVoluptate eu cillum laboris consectetur ut ullamco amet eu aute. Esse qui fugiat incididunt consequat duis amet tempor amet ex veniam culpa nulla incididunt. Minim Lorem occaecat id occaecat et dolore ad ut ut. Qui sunt commodo proident laborum aliquip esse. Ea proident commodo est consequat exercitation incididunt exercitation. Aliquip esse deserunt pariatur nostrud labore nostrud labore in nostrud deserunt nisi occaecat ea.\r\nUt ea amet quis reprehenderit qui reprehenderit occaecat elit ut ad ex. Reprehenderit dolor quis duis tempor enim aliqua labore amet dolore minim enim nulla. Enim ea adipisicing veniam consequat labore Lorem consectetur adipisicing incididunt est aliqua. Commodo cillum nisi duis aliqua minim proident ullamco pariatur duis. Labore cupidatat id exercitation aute adipisicing tempor occaecat minim officia cupidatat occaecat nisi incididunt labore. Pariatur nisi mollit sint dolor dolore veniam qui commodo id tempor. Sint velit voluptate deserunt amet reprehenderit.\r\n"
      }
    ])
  ]);
};
