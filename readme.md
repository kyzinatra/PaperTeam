# Teaching and Research Topic: Create a theory and software to study the orientations of fold lines when folding a sheet of paper multiple times.

Tasks:

- The result of folds is given, to restore the sequence of fold axes and, in general, the possibility of obtaining such a pattern of folds; write a program that performs these operations
- Come up with and write a series of theorems about how the orientations of the fold lines can and cannot look like
- Create a gaming site where tasks of the form will be generated (there should also be a convenient interface for entering solutions and checking answers)

> The robot assembles the structure by bending the sheet. The figure shows the task for the robot: the solid line shows the folds in one direction, the dotted lines in the other.

The control is carried out by specifying the bend axes (the axis is specified by one letter, after each bend some axes are combined with each other, in such cases it does not matter which axis to specify).

Specify the sequence of bend axes so that the structure acquires the most collapsed appearance. The direction of the fold is determined by the robot itself, however, if the assembly program cannot be implemented, it stops its work.”

Task comment

**Answer: BEHC(A)D(F)G(I)**

> Underlined pairs can be rearranged, and the letter in brackets can be replaced by the letter in front of it. There are 16 correct lines in total.

![Image alt](https://github.com/kyzinatra/PaperTeam/raw/master/assets/test.png)

To run the project:

1. Download [node.js](https://nodejs.org/en/)
2. Run in console:
   (Open one more console in directory \PaperTeam and type if need):

```
git clone https://github.com/kyzinatra/PaperTeam.git
```

```
cd web/
npm install
npm run dev
```

```
cd web/
npm run build
```

```
npm install
npm run listen
```

Open localhost:9000

Console API:

```sh
set $AXIS$ : 10..101 // Sets the $AXIS$ axis according to the pattern
```

```sh
set (width|height) int // Sets the height or width (width + height <= 28)
```

```sh
clear // Clear console
```

```sh
json get // get json from the constructor
```

```sh
difficulty (1|2|3) // set difficulty
```


# Доки

[GitHub - kyzinatra/PaperTeam](https://github.com/kyzinatra/PaperTeam)


# Анализ задания

## Терминология:

Сегмент - отрезок на оси, лежащих между двумя соседними, перпендикулярными данной осями. В алгоритме *Segment*

Ось - упорядоченный набор сегментов. Каждая ось имеет название по заглавной букве английского алфавита. (*Axis)*

Развертка - набор вертикальный и горизонтальных осей. (*Pattern)*

![how_it_should_work.drawio.png](assets/how_it_should_work.drawio.png)

## Требования к развертке:

Размеры крайних сегментов должны быть меньше размеров ячейки сетки. Они задаются в долях (0,1] от размера некраевого сегмента.

В развертке обязательно должна быть хотя бы одна вертикальная и хотя бы одна горизонтальная ось. Оси должны называться заглавными буквами латиницы, в порядке: горизонтальные оси сверху вниз, вертикальные слева направо.

# Алгоритм

## Сущности

Далее приведено описание основных сущностей, которыми оперирует алгоритм, их полей и основных методов.

```python
class Segment:
	**state**: bool
	**axis**: char
	**pos**: int
	**isFold**: bool # для TargetPattern

class Pattern:
	**horiz**: {’A’:[Segment,  ...], ‘B’: [Segment, ...]}
	**vert**: {’C’:[Segment,  ...], ... ‘I’: [Segment, ...]}
```

Поля horiz и vert хранят словари осей , где ключом является название оси, а данными список сегментов.

```python
class Links:
	**links**: {{&Segment, &Segment ...}, 
					{&Segment, &Segment ...}
					...}
	
	def **setLink**(seg1, const_seg)

class TargetPattern(Pattern):
	**vert: ... # наследутся из 
	horiz: ...
	valid_vert: ...  # та же структура данных, что и в vert**
	**links**: Links 
	
	**def FoldByAx(ax)**
```

```python
class SolutionTree(Tree):
	**ptrn**: Pattern
	**tp**: TargetPattern
	**doublesPaths:** lst
	
	def __**create_tree_alg2**(parent='root')
	def __**create_tree_alg1**(parent='root')
	
	def **get_best_paths**(lg_type=1)
```

SolutionTree наследует класс Tree из [библиотеки treelib](https://treelib.readthedocs.io/en/latest/).

## Примеры использования

# Сайт

## Технологи

*Все технологии сайта подразделяются на 2 категории. (Сайт написан полностью вручную не используя no-code, CMS и Site generators)*

- Frontend:
    - **Webpack**
    - Sass
    - **React**
    - **Typescript**
    - Redux (redux toolkit)
    - Uid
    - React-router
    - Axios

- Backend:
    - **Typescript**
    - **Express**
    - **Ts-node**
    - Nodemon
        
        

Полный список технологий можно посмотреть на [github](https://github.com/kyzinatra/PaperTeam)

в файлах

`package.json` — *для backend*

`src/package.json` — *для frontend*

## Хостинг

В качестве хостинга используется *heroku* с 1000 бесплатными часами в месяц c node и pyhton билдом (Что более чем достаточно для 1 проекта *24*30 = 720*)

## Процесс разработки

1. Перед стартом разработки необходимо определится с дизайном будущего сайта. Для этого используется *figma.*
    
    **[Исходный дизайн](https://www.figma.com/file/JYNq2eo1YU3GJtWiEA1wzC/PaperTeam?node-id=0%3A1)**
    
2. Создаем репозиторий на *github.* В корне проекта будет распологаться 2 папки: `server` и `web` — для *backend* и *frontend* разработки соответственно
3. Создадим структуру папок и начнем модульную разработку применяя `Flux` архитеркуру в нашем приложении
4. Пропишем основные методы get в *backend* и можем запускать с помощью *heroku* наш сайт

На сайте используется самописная консоль со следующим api:

```bash
difficulty (1|2|3) // set difficulty

set $AXIS$ : 10..101 // Sets the $AXIS$ axis according to the pattern

set (width|height) int // Sets the height or width (width + height <= 26)

clear // Clear console

json get // get json from the constructor
```

Исследовать сайт вы можете перейдя по [ссылке](https://paperteam.herokuapp.com/) (также доступна мобильная версия)