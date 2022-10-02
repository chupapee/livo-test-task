# Тестовое задание от Livo
 
### Требования к заданию
Необходимо сверстать макет desktop и mobile версии главной страницы сайта и сделать его адаптивным.

При верстке постарайтесь использовать:

1. tailwind css

2. vue.js предпочтительно (можно react.js)

## Инструкция по проекту

### Демонстрация по ссылке: [LaslesVPN](http://test-task-livo.vercel.app/)

<p align='center'>  
  <img height='300px' src='https://i.ibb.co/q13YNbz/mobile.jpg' alt='mobileSize'/>
  <img height='300px' src='https://i.ibb.co/ryG48vr/desktop.jpg' alt='desktopSize'/>
</p>

### Использованные библиотеки
- React
- Tailwind CSS - для динамической стилизации
- Swiper - для написания слайдера (кнопки навигации и пагинации - кастомные)
- React icons - для удобной загрузки иконок
### Структура проекта

####  Директории
- ```/public``` - Основная директория с исходным файлом
- ```/public/assets/``` - Директория с картинками проекта
- ```/src/``` - Исходный код проекта

#### Фичи
- При входе в приложение, контент загружается плавно
- Нажатие кнопок навигации в хедере проскроллит приложение к соответствующей секции
- Все картинки "резиновые", при изменении размеров экрана качество не теряется

#### Запуск
Чтобы запустить проект локально, установите необходимые зависимости командой:

```npm install```

Затем, в директории проекта необходимо выполнить команду

```npm start```

Перейдите в браузере по ссылке [http://localhost:3000](http://localhost:3000)