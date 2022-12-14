## Описание 

Todo приложение с возможностью регистрации и входа в аккаунт. При клике на кнопку добавить задачу, открывается модальное окно, в котором вводится текст задачи и прикрепляется нужный тег. Есть возможность фильтрации по тегу. Задачи, которые отмечены как выполненные можно удалить.

Если не хотите регистрироваться, то можете войти **по email: test@mail.ru** и **паролю: qwerty**.

Есть возможность менять тему на светлую или темную.

## Технологии 
1. React
2. TypeScript
3. Redux (redux-toolkit)
4. Firebase
5. CSS modules
7. Swiper

## Что было сделано 

1. Все приложение обернуто в Error Boundary, который рендерит специальный компонент, если возникают ошибки. Это позволяет избежать возможный крах приложения.

Используется общий компонент для 404 ERROR и для ошибок, которые ловятся в Error Boundary. Этот универсальный компонент принимает разные props и в зависимости от этого отображается нужный текст. Это позволяет избежать дублирования кода.

2. Приватные роуты.
Есть страница на которой отображаются данные, но эти данные может посмотреть только авторизованный пользователь, если он не авторизован, то его перебрасывает на страницу с авторизацией.

``<Route path={ROUTES.home.path} element={ <PrivateRoute> <Home /> </PrivateRoute> }/>``

В данном примере я оборачиваю компонент Home (является страницей) в компонент PrivateRoute, который внутри себя проверяет авторизацию и если ее нет, то на страницу Home вход не происходит.

3. TypeScript позволяет использовать Record, что очень удобно при создании роутов, так как мы заранее определяем в объекте какие страницы будут, это позволяет избежать ошибок.

4. Валидация form на ввод неверного пароля или логина.

Если пользователь вводит неверный пароль или логин, то у всей формы меняется стиль. 

5. При клике на кнопку **Add new task** открывается модальное окно. 

Модальное окно создается через createPortal, это сделано для того, чтобы модальное окно было поверх родителя.

```
return createPortal(
    <div className={styles.modal} onClick={handleClick}>
      <FormModal handleClickModal={setOpen} />
    </div>,
    document.body,
  );
```

Первый аргумент - это непосредственно модальное окно.

Второй аргумент - это то, место куда должно быть вставлено модальное окно.

Модальное окно закрывается при клике на область вне модального окна.

6. При нажатии на кнопку **Clear item** задачи, которые помеченные как выполненные удаляются. 

``` 
const handleClick = () => {
    dispatch(clearCompleted());
  };
``` 

**clearCompleted** - это reducer, который расположен в *slice - statesTaskSlice*. 

```
 clearCompleted: (state) => {
      state.completedTask = state.tasks.filter((item) => item.ready);
      state.completedTask.forEach((item) => {
        const task = doc(db, 'tasks', item.id);
        deleteDoc(task);
      });
    },
```

Сначала я фильтрую массив **completedTask**, в котором расположены все tasks. Затем прохожусь уже по этому отфильтрованному массиву с помощью forEach (так как ничего возвращать не нужно), нахожу задачу которая была удалена ``  const task = doc(db, 'tasks', item.id); `` и удаляю ее из БД firebase ``deleteDoc(task);``.

7. Модальное окно содержит поле ввода задачи и теги, по ним потом будет осуществляться фильтрация. 

Теги представляю собой кнопки. 

``` 
 <button
      type="button"
      data-state={item.state}
      className={classnames(styles.label, {
      [styles.label_active]: btn === item.state,
      })}
      onClick={handleClick}
      key={item.state} >
      {item.state}
 </button>
```

Атрибут **data-state={item.state}** нужен для того, чтобы в SCSS можно было динамически устанавливать нужные цвета в зависимости от значения **item.state**. 

```
.label[data-state='Later'] {
  background-color: $later;
}
```
Использую библиотеку **classnames**, чтобы установит новый стиль для той кнопки, которая является активной.

8. Можно менять тему на светлую или темную. 

Хук **useTheme** устанавливает в **localStorage** нужное значение. Это было сделано для того, чтобы тема сохранялось после обновления и после выхода из приложения. 

``` 
 useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);
```

Затем уже в компоненте Theme можно выбрать тему нажав на иконку. В зависимости от того какая сейчас тема будут рендериться разные svg иконки. 

```
  {theme === THEME.LIGHT ? (
        <Sun onClick={setDarkTheme} />
      ) : (
        <Moon onClick={setLightTheme} />
      )}
```

9. В приложение можно зарегистрироваться или войти, если вы уже ранее регистрировались. 

Универсальный компонент Form позволяет избежать дублирования кода. В этот компонент передаются нужные props - *text, handleClick, errorStyle*. 

**text** - может быть Registration или Login In. 

**handleClick** - функция, которая вызывается при клике. 

**errorStyle** - если функция handleClick заканчивается ошибкой (при входе неверный пароль или логин, ошибка регистрации), то стиль с нормального меняется на errorStyle. 

10. В мобильной версии есть slider. 

В мобильной версии фильтрация осуществляется через slider. 

```
  const handleChange = ({ activeIndex }) => {
    switch (activeIndex) {
      case 1:
        toDispatch(INDEX.one);
        break;
    ....
```

Когда происходит смена слайда вызывается функция ** handleChange**, которая принимает индекс активного слайда - **activeIndex**. В зависимости от того, какой индекс будет идти разная фильтрация. Например, если индекс 1 (как в примере выше), значит фильтрация будет идти по тегу *Late*.

```
export enum INDEX {
  'zero' = 'All',
  'one' = 'Late',
  'two' = 'Urgent',
  'three' = 'To study',
  'four' = 'Important',
  'five' = 'Completed',
}
```
Функция **toDispatch** вызывает reducer setFilterState, который устанавливает нужный state для фильтрации.

```
 const toDispatch = (arg: string) => {
    dispatch(setFilterState(arg));
  };
```

11. Сделан адаптив под разные устройства.

Мобильная и планшетная версия: Хук useWindowSize определяет ширину viewport и в соответствии с этим рендерится нужный компонент. В декстопной версии присутствуют некоторые элементы, которые отсутствуют в мобильной и планшетной версии.

Адаптив сделан с помощью mixin, который принимает переменные и в зависимости от значения возвращает нужный @media.

## Как запустить 

GitHub Page: https://irinrer.github.io/Todo_app/

Или можете запустить у себя. 

1. Клонируете репозиторий

`` https://github.com/IrinRer/Todo_app.git ``

2. Устанавливаете зависимости

``npm i``

3. Запускаете проект

``npm start``
