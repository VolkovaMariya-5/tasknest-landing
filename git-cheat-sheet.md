# Git Шпаргалка для "tasknest landing"

## Задача 2. Инициализация Git в папке с лендингом
```bash
git init
```

## Задача 3. Создание репозитория tasknest landing на GitHub
(Эти шаги выполняются на сайте GitHub)

## Задача 4. Первый коммит и отправка проекта

### Добавление удаленного репозитория (после создания репозитория на GitHub)
```bash
git remote remove origin
git remote add origin git@github.com:VolkovaMariya-5/tasknest-landing.git
```

### Подготовка файлов к сохранению
```bash
git add .
```

### Создание первого коммита
```bash
git commit -m "Первый коммит лендинга"
```

### Отправка проекта в репозиторий GitHub
```bash
git push -u origin main
```

## Дополнительное задание (по желанию)

### Изменение файла (пример)
(Измените любой файл в папке проекта, например, `index.html` или `script1.js`)

### Подготовка измененного файла к сохранению
```bash
git add [имя_файла]
```
или
```bash
git add .
```

### Создание нового коммита
```bash
git commit -m "Небольшое изменение на лендинге"
```

### Отправка изменений в GitHub
```bash
git push