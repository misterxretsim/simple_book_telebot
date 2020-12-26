const groupRules =
    'Правила чата:\n' +
    '\n' +
    'Чтобы сделать заказ,\n' +
    'Вам нужно нажать на кнопку под фотографией товара, а затем нажать на появившуюся кнопку в вашей клавиатуре.\n' +
    '\nЛибо Вы можете написать в общий чат:\n' +
    '"Беру *номер(а) заказа(ов)*";\n' +
    '\n' +
    'Например:\n' +
    '"Беру 1001", "Аня, беру 100, 101 и 1001"\n' +
    '\n' +
    'Иные варианты бот, к сожалению, НЕ воспринимает. Если все прошло успешно, бот отправит Вам личное сообщение.';

const lsRules =
    '/info - Информация о Вашем заказе;\n' +
    '/help - информация по взаимодействию с ботом, в личных сообщениях и беседе разные правила.';

const adminRules =
    'Пользовательсике команды:\n' +
    '/info - инфо по корзине клиента;\n' +
    '/help - информация по взаимодействию с ботом, в личных сообщениях и беседе разные правила.\n' +
    '\n' +
    'Команды администратора:\n' +
    '/new - команда для завершения последней закупки;\n' +
    '/coast 100 - команда для выставления цены на пачку отправленных ранее фоток(вместо 100 надо вбить нужную цену);\n' +
    '/clients - команда для получения отчета по всем клиентам;\n' +
    '/client @username - команда для получения отчета по клиенту на текущей закупке.';

const startRules =
    'Привет!\n' +
    '\n' +
    'Тут ты сможешь видеть информацию о своем заказе.\n' +
    '\n' +
    'Полезные команды:\n' +
    '\n' +
    '/help - информация по взаимодействию с ботом, в личных сообщениях и беседе разные правила;\n' +
    '/info - информация о Вашем заказе.';

module.exports = { groupRules, lsRules, adminRules, startRules }
