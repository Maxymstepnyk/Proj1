import math

# Зчитуємо вхідні значення з консолі
g, h, q = [int(i) for i in input().split()]

# Визначаємо параметр m
m = math.ceil(math.sqrt(q))

# Ініціалізуємо словник для зберігання значень логарифмів
t = {}
e = 1

# Заповнюємо словник логарифмів для baby steps
for i in range(m):
    t[e] = i
    e = (e * g) % q

# Визначаємо обернений елемент для giant steps
f = pow(g, q - m - 1, q)

# Ініціалізуємо змінну для порівняння
e = h

# Проводимо baby step - giant step алгоритм
for i in range(m):
    if e in t:
        res = i * m + t[e]
        break
    e = (e * f) % q

# Виводимо результат
print(res)
