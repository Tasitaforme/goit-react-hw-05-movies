
# Критерії приймання ДЗ

- Створений репозиторій `goit-react-hw-05-movies`
- При здачі домашньої роботи є посилання: на вихідні файли та робочі сторінки
  кожного проекту на `GitHub Pages`.
- У стані компонентів зберігається мінімально необхідний набір даних, решта
  обчислюється
- Під час запуску коду завдання в консолі відсутні помилки та попередження.
- Для кожного компонента є окрема папка з файлом React-компонента та файлом
  стилів
- Для компонентів описані `propTypes`
- Все, що компонент очікує у вигляді пропсів, передається йому під час виклику.
- Імена компонентів зрозумілі та описові
- JS-код чистий і зрозумілий, використовується `Prettier`
- Стилізація виконана `CSS-модулями` або `Styled Components`.

## Завдання «Кінопошук»

Створи базову маршрутизацію для застосунку пошуку і зберігання фільмів. Прев'ю
робочого застосунку
[дивись за посиланням](https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view?usp=sharing).

Використовуй цей
[шаблон React-проекту](https://github.com/goitacademy/react-homework-template#readme)
як стартову точку своєї програми.

## API themoviedb.org

Для бекенду використовуй [themoviedb.org API](https://www.themoviedb.org/).
Необхідно зареєструватися (можна ввести довільні дані) та отримати API-ключ. У
цій роботі будуть використовуватися наступні ендпоінти.

- [/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending)
  список найпопулярніших фільмів на сьогодні для створення колекції на головній
  сторінці.
- [/search/search-movies](https://developers.themoviedb.org/3/search/search-movies)
  пошук фільму за ключовим словом на сторінці фільмів.
- [/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details)
  запит повної інформації про фільм для сторінки кінофільму.
- [/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits)
  запит інформації про акторський склад для сторінки кінофільму.
- [/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews)
  запит оглядів для сторінки кінофільму.

[Посилання на документацію](https://developers.themoviedb.org/3/getting-started/introduction)

## Маршрути

У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим
маршрутом, його необхідно перенаправляти на домашню сторінку.

- `'/'` – компонент `<HomePage>`, домашня сторінка зі списком популярних
  кінофільмів.
- `'/movies'` – компонент `<MoviesPage>`, сторінка пошуку кінофільмів за
  ключовим словом.
- `'/movies/:movieId'` – компонент `<MovieDetailsPage>`, сторінка з детальною
  інформацією про кінофільм.
- `/movies/:movieId/cast` – компонент `<Cast>`, інформація про акторський склад.
  Рендериться на сторінці `<MovieDetailsPage>`.
- `/movies/:movieId/reviews` – компонент `<Reviews>`, інформація про огляди.
  Рендериться на сторінці `<MovieDetailsPage>`.

## Code Splitting (поділ коду)

Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи
`React.lazy()` і `Suspense`.

# Бібліотеки та імпорти

## Динамічне імпортування модулів
**import { lazy } from 'react';**

`const Home = lazy(() => import('pages/Home/Home'));`

**import { Suspense } from 'react';**

```ruby
<Suspense fallback={<Loader />}>
  <Outlet />
</Suspense>
```

## Читання та зміна рядка запиту в URL-адресі (хук useSearchParams)
[**import { useSearchParams } from 'react-router-dom';**](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

```const [searchParams, setSearchParams] = useSearchParams();```

## Повернення динамічних параметрів із поточної URL-адреси (хук useParams)
[**import { useParams } from 'react-router-dom';**](https://reactrouter.com/en/main/hooks/use-params)

`const { movieId } = useParams();`

## Маршрутизація
**npm i react-router-dom** 

`import { BrowserRouter } from 'react-router-dom';`

```ruby
<BrowserRouter basename="/your_repo_name">
  <App />
</BrowserRouter>
```

`import { Route, Routes } from 'react-router-dom'`

```ruby
<Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Home/>} />
        <Route path='movies' element={<Movies/>} />
        <Route path='*' element={<Error/> } />
      </Route>
    </Routes>
```

`import { Outlet } from 'react-router-dom'`

```ruby
<Outlet/>
```

## Повернення об’єкту розташування з поточної URL-адреси (хук location)
`import { Link, useLocation } from 'react-router-dom';`

```ruby
const location = useLocation();
<Link to={`/movies/${movie.id}`} state={{ from: location }}>
```

```ruby
const location = useLocation();
<Link to={location.state?.from ?? '/'}/>
```

## HTTP-запити 
[**npm i axios**](https://axios-http.com/)

`import axios from "axios";`

## Перевірка типів одержуваних пропсів
[**npm i prop-types**](https://www.npmjs.com/package/prop-types)

`import PropTypes from 'prop-types'`

## Прелоадер
[**npm i  react-loader-spinner**](https://mhnpd.github.io/react-loader-spinner/)

`import { InfinitySpin } from 'react-loader-spinner';`

## CSS на JavaScript
[**npm i styled-components**](https://www.npmjs.com/package/styled-components)

`import styled from 'styled-components';`

## Іконки
[**npm i react-icons**](https://www.npmjs.com/package/react-icons)

`import { BsSearchHeart } from 'react-icons/bs';`

