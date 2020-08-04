# CarDone
CarDone - это агрегатор провайдеров автомобильных услуг. Идея создания - объединить решение всех потребностей, связанных с ремонтом или уходом за автомобилем в одном месте. Для удобства использования и доступности при типовом пользовательском сценарии был выбран подход Mobile first.

## Пользовательский сценарий:
Представим ситуацию: Вы поехали с семьей отдыхать в Сочи и по дороге близ Воронежа у вас заглох автомобиль. Местных сервисов вы не знаете, автомобиль нужно эвакуировать. Все это совершенно не входило в ваши планы, омрачать без того испорченную поездку нудным поиском сервисов и эвакуатора не хочется, но приходится. Поисковик выдает не лучшие решения - либо реклама, либо вовсе неактуальная информация. Энтузиазма вам хватает обзвонить только первые десять контор, занимающихся эвакуаторскими услугами, у одних "нет свободных машин", другие вовсе не берут трубку. Наконец вашу заявку приняли, но эвакуатор сможет приехать только через полтора часа. Возможно, вы бы и нашли кого-то, кто приедет быстрее, но после стольких безрезультатных звонков ухватились за первую возможность. Спустя четыре часа вы все-таки добрались до сервиса. Диагностика показывает, что вам требуется замена некоторых деталей, в наличии у сервиса которых нет, единственный вариант - купить самостоятельно. Снова поиски и трата времени. Настроение испорчено, сил не осталось, а впереди еще дорога.
Любой собственник автомобиля или автолюбитель рано или поздно сталкивается с подобной ситуацией, Агрегатор CarDone призван максимально упростить их решение. 

## Как это работает:
На главной странице приложения всего шесть категорий автомобильных услуг: автосервисы, шиномонтаж, запчасти, мойки, заправки и эвакуатор. Все кроме категории "Эвакуатор" работают по единому принципу: выбрав одну из категорий отобразятся первые десять представителей услуги, попадающие в выборку в зависимости от ранжирования (расстояние, рейтинг, отзывы). В карточке каждого из них есть возможность построить маршрут (yandex.map api) или добавить в "Избранное". Список избранных сервисов отображается в профиле зарегестрированного пользователя. 
Опция "Эвакуатор", в свою очередь, призвана упростить вызов эвакуатора. Пользователю не придется искать и обзванивать множество контор и провайдеров, вместо этого, приложение предлагает заполнить заявку только в одном месте, а информация о заявке будет отправлена всем представителям эвакуационных услуг в качестве ЛИДа. На данный момент информацию о заявках можно получить подключившись к телеграм-боту CarDone Evacuator Bot или непосредственно к API приложения. Такой подход дает возможность организовать здоровую конкурентную среду между частными предпринимателями и юридическими лицами, оказывающими услугу, а пользователям широту выбора и диапазона соотношения цена/качество.

![Image alt](https://github.com/{baymns}/{cardone}/raw/{dev}/{readme-images}/main.jpg)
![Image alt](https://github.com/{baymns}/{cardone}/raw/{dev}/{readme-images}/services.jpg)
![Image alt](https://github.com/{baymns}/{cardone}/raw/{dev}/{readme-images}/profile.jpg)
![Image alt](https://github.com/{baymns}/{cardone}/raw/{dev}/{readme-images}/evacuator.jpg)
![Image alt](https://github.com/{baymns}/{cardone}/raw/{dev}/{readme-images}/bot.jpg)


## Используемые технологии:
JavaScript, React, Redux, Node.js, Express, MognoDB, Mongoose, Bootstrap, React-Spring, Yandex.Maps


## Авторы

-[Мансур Байсаров](https://github.com/baymns)
-[Вадим Федоров](https://github.com/vadyton)
-[Сергей Стрелков](https://github.com/Sertata)
