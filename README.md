# React + Vite

Добрый день.
Использовал Vite для создания React проекта.
Я не смог сделать веб-скрапинг сайта Tengrinews. Пока не знаю как обходить Cross-Origin Resource Sharing policy access restriction.
Для этого проекта воспользовался New York Times API с запросом статей, связанных с Казахстаном.
В NYT API ссылки на изображения нерабочие, поэтому изображения не отображаются. Я не стал добавлять и аллоцировать картинки с другого открытого API.
Также не получилось отобразить 15 статей на страницу, NYT API отображает только 10.
Добавил пагинацию и отображение деталей статьи по клику. Прибегал к помощи Perplexity AI.



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
