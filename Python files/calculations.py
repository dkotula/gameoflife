# -*- coding: utf-8 -*-
"""calculations.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1RwpQrEXueNZbCYYr_1OkZK0ck7OA37Z7
"""

import matplotlib.pyplot as plt
import numpy as np
import imageio
from google.colab import drive

cmaps = ['Reds', 'Greens', 'Blues', 'Oranges', 'Purples']

# montowanie google drive
drive.mount('/content/drive')

# wczytanie danych
def load_data(name):
  with open('/content/drive/My Drive/Colab Notebooks/gameoflife/' + name) as f:
    return [float(i) for i in f.read().split()]

# wykres 2D
def plot2d_new(x, y, ax_label, ay_label, title):
  _, ax = plt.subplots()
  ax.plot(x, y)
  ax.grid()
  ax.set_title(title, fontsize=20)
  plt.xlabel(ax_label, fontsize=18) 
  plt.ylabel(ay_label, fontsize=18) 

  plt.show()

def load_data_3d(src):
  data = load_data(src)
  cycle_number = np.array(data[0:][::4]).astype(int)
  dataX = np.array(data[1:][::4]).astype(int)
  dataY = np.array(data[2:][::4]).astype(int)
  dataZ = np.array(data[3:][::4])

  all_data = []
  for i in range(cycle_number[-1] + 1):
    all_data.append([])
    for j in range(dataX[-1] + 1):
      all_data[i].append([])
      for k in range(dataY[-1] + 1):
        all_data[i][j].append(dataZ[k + j * (dataY[-1] + 1) + i * (dataX[-1] + 1) * (dataY[-1] + 1)])
  return all_data

def sum_cells_to_cycles(data):
  sums = []
  for x in range(len(data)):
    sums.append(0.0)
    for y in range(len(data[x])):
      for z in range(len(data[x][y])):
        sums[x] += data[x][y][z]
  return sums

def calculate_entropy_lattice(data):
  entropies = []
  for x in range(len(data)):
    entropies.append([])
    for y in range(len(data[x])):
      entropies[x].append([])
      for z in range(len(data[x][y])):
        if data[x][y][z] > 0:
          entropies[x][y].append(-np.log(data[x][y][z]))
        else:
          entropies[x][y].append(0.0)
  return entropies

def calculate_entropy2(data, fig_x = 6.4, fig_y = 4.8, show_etropy = True):
  entropies = calculate_entropy_lattice(data)
  entropy = sum_cells_to_cycles(entropies)

  if (show_etropy == False):
    return entropy
  _, ax = plt.subplots(figsize=(fig_x, fig_y))
  ax.plot(range(len(entropy)), entropy)
  ax.set_title("Entropy")
  ax.grid()
  plt.xlabel('Cycle')
  plt.ylabel('Entropy')
  plt.show()

def plot_entropy_and_probability(cycle, data, entropy, heatmap, vmin = -1, vmax = -1):
  x = np.array(range(len(data)))
  y = np.array(range(len(data[0])))
  x = np.repeat(x, len(data[0]))
  y = np.tile(y, len(data))
  z = np.array(data).flatten()

  x_data = x
  y_data = y
  z_data = [0] * z.size
  dx = [1] * x_data.size
  dy = [1] * y_data.size
  dz = z

  if heatmap:
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(24, 9))
    ax1.plot(range(len(entropy)), entropy)
    if vmin == -1:
      im2 = ax2.imshow(np.array(data), interpolation='None')
    else:
      im2 = ax2.imshow(np.array(data), interpolation='None', vmin=vmin, vmax=vmax)
    fig.colorbar(im2, orientation='vertical')
  else:
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(24, 9))
    ax1 = fig.add_subplot(121)
    ax1.plot(range(len(entropy)), entropy)
    ax1.set_title('Entropy')
    ax2 = fig.add_subplot(projection='3d')
    ax2.set_zlim([0, 0.2])
    ax2.bar3d(x_data, y_data, z_data, dx, dy, dz, shade=True)

  fig.suptitle('Cycle ' + str(cycle))
  ax1.set_title('Entropy')
  ax2.set_title('Probability')
  ax1.grid()
  
  plt.xlabel('x')
  plt.ylabel('y')
  #ax1.set_zlabel('length of life')
  fig.canvas.draw()       # draw the canvas, cache the renderer
  image = np.frombuffer(fig.canvas.tostring_rgb(), dtype='uint8')
  image  = image.reshape(fig.canvas.get_width_height()[::-1] + (3,))

  return image

def entropy_and_probability(data, fps, name, heatmap, fig_x = 6.4, fig_y = 4.8, vmin = -1, vmax = -1):
  entropy = calculate_entropy2(data, fig_x = fig_x, fig_y = fig_y, show_etropy = False)
  kwargs_write = {'fps':fps, 'quantizer':'nq'}
  imageio.mimsave('./' + name + '.gif', [plot_entropy_and_probability(cycle, data[cycle], entropy[:cycle], heatmap, vmin, vmax) for cycle in range(len(data))], fps=fps)

def mass_entropy(data, fig_x = 6.4, fig_y = 4.8, fontsize_label = 18, fontsize_title = 20):
  entropy = calculate_entropy2(data, fig_x = fig_x, fig_y = fig_y, show_etropy = False)
  mass = sum_cells_to_cycles(data)
  fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(24, 9))
  ax1.plot(range(len(mass)), mass)
  ax1.set_title('Mass', fontsize=fontsize_title)
  ax1.set_xlabel('Cycle', fontsize=fontsize_label)
  ax2.plot(range(len(entropy)), entropy)
  ax2.set_title('Entropy', fontsize=fontsize_title)
  ax2.set_xlabel('Cycle', fontsize=fontsize_label)
  ax1.xaxis.set_tick_params(labelsize=fontsize_label)
  ax1.yaxis.set_tick_params(labelsize=fontsize_label)
  ax2.xaxis.set_tick_params(labelsize=fontsize_label)
  ax2.yaxis.set_tick_params(labelsize=fontsize_label)
  ax1.grid()
  ax2.grid()

  plt.show()

def plot_heatmap(cycle, data, name, fig_x = 6.4, fig_y = 4.8, vmin = -1, vmax = -1):
  fig = plt.figure(figsize=(fig_x, fig_y))
  ax = fig.add_subplot(121)
  if vmin == -1:
    im = ax.imshow(np.array(data), interpolation='None')
  else:
    im = ax.imshow(np.array(data), interpolation='None', vmin=vmin, vmax=vmax)
  fig.colorbar(im, orientation='vertical')

  ax.set_title(name + ' - cycle number ' + str(cycle), fontsize=20)
  
  plt.xlabel('x', fontsize=18)
  plt.ylabel('y', fontsize=18)
  fig.canvas.draw()
  image = np.frombuffer(fig.canvas.tostring_rgb(), dtype='uint8')
  image  = image.reshape(fig.canvas.get_width_height()[::-1] + (3,))

  return image

def plot_data_animation(data, fps, name, filename = '', fig_x = 6.4, fig_y = 4.8, vmin = -1, vmax = -1):
  kwargs_write = {'fps':fps, 'quantizer':'nq'}
  imageio.mimsave('./' + name + '.gif', [plot_heatmap(cycle, data[cycle], name, fig_x, fig_y, vmin, vmax) for cycle in range(len(data))], fps=fps)

def calculate_temperature(data, fig_x = 6.4, fig_y = 4.8):
  mass = np.array(sum_cells_to_cycles(data))
  entropy = np.array(calculate_entropy2(data, show_etropy = False))
  fig, axis = plt.subplots(1, 3, figsize=(fig_x * 3, fig_y))
  temperature = (mass[1:-1] - mass[0:-2]) / (entropy[1:-1] - entropy[0:-2])
  axis[0].plot(range(len(mass[1:-1] - mass[0:-2])), mass[1:-1] - mass[0:-2])
  axis[0].set_title('dE')
  axis[0].set_xlabel('Cycle')
  axis[1].plot(range(len(entropy[1:-1] - entropy[0:-2])), entropy[1:-1] - entropy[0:-2])
  axis[1].set_title('dS')
  axis[1].set_xlabel('Cycle')
  axis[2].plot(range(len(temperature)), temperature)
  axis[2].set_title('T=dE/dS')
  axis[2].set_xlabel('Cycle')
  for i in range(3):
    axis[i].grid()
  plt.show()

def calculate_temperature_lattice(mass):
  entropy = calculate_entropy_lattice(mass)
  temperature = []
  for x in range(len(mass) - 1):
    temperature.append([])
    for y in range(len(mass[x])):
      temperature[x].append([])
      for z in range(len(mass[x][y])):
        dm = (mass[x+1][y][z] - mass[x][y][z])
        ds = (entropy[x+1][y][z] - entropy[x][y][z])
        if ds != 0.0:
          temperature[x][y].append(dm / ds)
        else:
          temperature[x][y].append(0.0)
  return temperature

def average(data, n, m):
  avarage_data = []
  j = len(data[0]) // n
  k = len(data[0][0]) // m
  for x in range(len(data)):
    avarage_data.append([])
    for y in range(j):
      avarage_data[x].append([])
      for z in range(k):
        avarage_data[x][y].append(0.0)
        for l1 in range(n):
          for l2 in range(m):
            avarage_data[x][y][z] += data[x][y*n+l1][z*m+l2]
        avarage_data[x][y][z] /= n * m
  return avarage_data

def plot2d_new2(x, y, ax_label, ay_label, title, y_log = False):
  _, ax = plt.subplots()
  ax.plot(x, y)
  ax.grid()
  ax.set_title(title, fontsize=20)
  plt.xlabel(ax_label, fontsize=18)
  plt.ylabel(ay_label, fontsize=18)
  if y_log:
    ax.set_yscale('log')
  plt.show()

def plot_data_animation_tribes(data, fps, name, filename = '', fig_x = 6.4, fig_y = 4.8, vmin = -1, vmax = -1):
  kwargs_write = {'fps':fps, 'quantizer':'nq'}
  imageio.mimsave('./' + name + '.gif', [plot_heatmap_tribes(cycle, data[:, cycle], name, fig_x, fig_y, vmin, vmax) for cycle in range(len(data[0]))], fps=fps)

def plot_heatmap_tribes(cycle, data, name, fig_x = 6.4, fig_y = 4.8, vmin = -1, vmax = -1):
  fig = plt.figure(figsize=(fig_x, fig_y))
  ax = fig.add_subplot(121)
  if vmin == -1:
    for i in range(len(data)):
      plt.imshow(np.array(data[i]), interpolation='None', cmap=cmaps[i], alpha=0.5)
  else:
    for i in range(len(data)):
      plt.imshow(np.array(data[i]), interpolation='None', vmin=vmin, vmax=vmax, cmap=cmaps[i], alpha=0.5)

  ax.set_title(name + ' - cycle number ' + str(cycle))
  
  plt.xlabel('x')
  plt.ylabel('y')
  fig.canvas.draw()
  image = np.frombuffer(fig.canvas.tostring_rgb(), dtype='uint8')
  image  = image.reshape(fig.canvas.get_width_height()[::-1] + (3,))

  return image

def mass_two_tribes(data1, data2, fig_x = 6.4, fig_y = 4.8, fontsize_label = 18, fontsize_title = 20):
  mass1 = sum_cells_to_cycles(data1)
  mass2 = sum_cells_to_cycles(data2)
  fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(24, 9))
  ax1.plot(range(len(mass1)), mass1)
  ax1.set_title('Mass of the first tribe', fontsize=fontsize_title)
  ax1.set_xlabel('Cycle', fontsize=fontsize_label)
  ax2.plot(range(len(mass2)), mass2)
  ax2.set_title('Mass of the second tribe', fontsize=fontsize_title)
  ax2.set_xlabel('Cycle', fontsize=fontsize_label)
  ax1.xaxis.set_tick_params(labelsize=fontsize_label)
  ax1.yaxis.set_tick_params(labelsize=fontsize_label)
  ax2.xaxis.set_tick_params(labelsize=fontsize_label)
  ax2.yaxis.set_tick_params(labelsize=fontsize_label)
  ax1.grid()
  ax2.grid()
  plt.show()

def entropy_two_tribes(data1, data2, fig_x = 6.4, fig_y = 4.8, fontsize_label = 18, fontsize_title = 20):
  entropy1 = calculate_entropy2(data1, fig_x = fig_x, fig_y = fig_y, show_etropy = False)
  entropy2 = calculate_entropy2(data2, fig_x = fig_x, fig_y = fig_y, show_etropy = False)
  fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(24, 9))
  ax1.plot(range(len(entropy1)), entropy1)
  ax1.set_title('Entropy of the first tribe', fontsize=fontsize_title)
  ax1.set_xlabel('Cycle', fontsize=fontsize_label)
  ax2.plot(range(len(entropy2)), entropy2)
  ax2.set_title('Entropy of the second tribe', fontsize=fontsize_title)
  ax2.set_xlabel('Cycle', fontsize=fontsize_label)
  ax1.xaxis.set_tick_params(labelsize=fontsize_label)
  ax1.yaxis.set_tick_params(labelsize=fontsize_label)
  ax2.xaxis.set_tick_params(labelsize=fontsize_label)
  ax2.yaxis.set_tick_params(labelsize=fontsize_label)
  ax1.grid()
  ax2.grid()
  plt.show()

def show_tribes(data1, data2, name, fig_x = 6.4, fig_y = 4.8, fontsize_label = 18, fontsize_title = 20):
  fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(24, 9))
  ax1.plot(range(len(data1)), data1)
  ax1.set_title(f'{name} of the first tribe', fontsize=fontsize_title)
  ax1.set_xlabel('Cycle', fontsize=fontsize_label)
  ax2.plot(range(len(data2)), data2)
  ax2.set_title(f'{name} of the second tribe', fontsize=fontsize_title)
  ax2.set_xlabel('Cycle', fontsize=fontsize_label)
  ax1.xaxis.set_tick_params(labelsize=fontsize_label)
  ax1.yaxis.set_tick_params(labelsize=fontsize_label)
  ax2.xaxis.set_tick_params(labelsize=fontsize_label)
  ax2.yaxis.set_tick_params(labelsize=fontsize_label)
  ax1.grid()
  ax2.grid()
  plt.show()

"""# System otwarty 100x100"""

name = 'probability_r1000_c200'
data = load_data_3d(name + '.txt')

# Mass
mass = sum_cells_to_cycles(data)
plot2d_new2(range(len(mass)), np.array(mass), 'Cycle', 'Mass', 'Mass')

# Entropy
calculate_entropy2(data, 12, 8)

# Probability
plot_data_animation(data, 10, 'Probability', name, 24, 9)

# Probability average
mass_average = average(data, 5, 5)
plot_data_animation(mass_average, 10, 'Probability', name, 24, 9)

# Entropy
entropy = calculate_entropy_lattice(data)
plot_data_animation(entropy, 10, 'Entropy', name, 24, 9)

# Entropy average
entropy_average = average(data, 5, 5)
plot_data_animation(entropy_average, 10, 'Entropy', name, 24, 9)

# Mass vs Entropy
mass_entropy(data, 12, 8)

# Temperature
temperature = calculate_temperature_lattice(data)
calculate_temperature(data, 16, 16)

# Temperature
plot_data_animation(temperature, 10, 'Temperature', name, 24, 9)

# Temperature average
temperature_average = average(temperature, 5, 5)
plot_data_animation(temperature_average, 10, 'Temperature', name, 24, 9)

"""# System z jedną barierą"""

name = 'probability_r200_c199'
data = load_data_3d(name + '.txt')

# Mass
mass = sum_cells_to_cycles(data)
plot2d_new2(range(len(mass)), np.array(mass), 'Cycle', 'Mass', 'Mass')

# Entropy
calculate_entropy2(data, 12, 8)

# Probability
plot_data_animation(data, 10, 'Probability', name, 24, 9)

# Probability average
mass_average = average(data, 5, 5)
plot_data_animation(mass_average, 10, 'Probability', name, 24, 9)

# Entropy
entropy = calculate_entropy_lattice(data)
plot_data_animation(entropy, 10, 'Entropy', name, 24, 9)

# Entropy average
entropy_average = average(data, 5, 5)
plot_data_animation(entropy_average, 10, 'Entropy', name, 24, 9)

# Mass vs Entropy
mass_entropy(data, 12, 8)

# Temperature
temperature = calculate_temperature_lattice(data)
calculate_temperature(data, 16, 16)

# Temperature
plot_data_animation(temperature, 10, 'Temperature', name, 24, 9)

# Temperature average
temperature_average = average(temperature, 5, 5)
plot_data_animation(temperature_average, 10, 'Temperature', name, 24, 9)

"""# System z dwoma barierami"""

name = 'probability_r200_c202'
data = load_data_3d(name + '.txt')

# Mass
mass = sum_cells_to_cycles(data)
plot2d_new2(range(len(mass)), np.array(mass), 'Cycle', 'Mass', 'Mass')

# Entropy
calculate_entropy2(data, 12, 8)

# Probability
plot_data_animation(data, 10, 'Probability', name, 24, 9)

# Probability average
mass_average = average(data, 5, 5)
plot_data_animation(mass_average, 10, 'Probability', name, 24, 9)

# Entropy
entropy = calculate_entropy_lattice(data)
plot_data_animation(entropy, 10, 'Entropy', name, 24, 9)

# Entropy average
entropy_average = average(data, 5, 5)
plot_data_animation(entropy_average, 10, 'Entropy', name, 24, 9)

# Mass vs Entropy
mass_entropy(data, 12, 8)

# Temperature
temperature = calculate_temperature_lattice(data)
calculate_temperature(data, 16, 16)

# Temperature
plot_data_animation(temperature, 10, 'Temperature', name, 24, 9)

# Temperature average
temperature_average = average(temperature, 5, 5)
plot_data_animation(temperature_average, 10, 'Temperature', name, 24, 9)

"""# System z dwoma plemionami daleko siebie"""

# 2 tribes 2 barriers configuration 8
name1 = 'probability_r300_c200_t1'
name2 = 'probability_r300_c200_t2'
data1 = load_data_3d(name1 + '.txt')
data2 = load_data_3d(name2 + '.txt')

# Mass
mass_two_tribes(data1, data2, 12, 8)

# Entropy
entropy_two_tribes(data1, data2, 12, 8)

# Probability
data = np.array([data1, data2])
plot_data_animation_tribes(data, 10, 'Probability', fig_x = 24, fig_y = 9)

# Entropy
entropy1 = calculate_entropy_lattice(data1)
entropy2 = calculate_entropy_lattice(data2)
data = np.array([entropy1, entropy2])
plot_data_animation_tribes(data, 10, 'Entropy', fig_x = 24, fig_y = 9)

# Temperature
entropy1 = calculate_entropy_lattice(data1)
entropy2 = calculate_entropy_lattice(data2)
data = np.array([entropy1, entropy2])
mass1 = np.array(sum_cells_to_cycles(data1))
mass2 = np.array(sum_cells_to_cycles(data2))

entropy1 = np.array(calculate_entropy2(data1, show_etropy = False))
entropy2 = np.array(calculate_entropy2(data2, show_etropy = False))
dm1 = mass1[1:-1] - mass1[0:-2]
dm2 = mass2[1:-1] - mass2[0:-2]
ds1 = entropy1[1:-1] - entropy1[0:-2]
ds2 = entropy2[1:-1] - entropy2[0:-2]
t1 = dm1 / ds1
t2 = dm2 / ds2

show_tribes(dm1, dm2, 'Derivative of mass with respect to time', 12, 8)
show_tribes(ds1, ds2, 'Derivative of entropy with respect to time', 12, 8)
show_tribes(t1, t2, 'Temperature', 12, 8)

# Temperature
temperatures1 = calculate_temperature_lattice(data1)
temperatures2 = calculate_temperature_lattice(data2)
data = np.array([temperatures1, temperatures2])
plot_data_animation_tribes(data, 10, 'Temperature', fig_x = 24, fig_y = 9)

"""# System z dwoma plemionami blisko siebie"""

# 2 tribes 2 barriers configuration 8
name1 = 'probability_r200_c200_t1'
name2 = 'probability_r200_c200_t2'
data1 = load_data_3d(name1 + '.txt')
data2 = load_data_3d(name2 + '.txt')

# Mass
mass_two_tribes(data1, data2, 12, 8)

# Entropy
entropy_two_tribes(data1, data2, 12, 8)

# Probability
data = np.array([data1, data2])
plot_data_animation_tribes(data, 10, 'Probability', fig_x = 24, fig_y = 9)

# Entropy
entropy1 = calculate_entropy_lattice(data1)
entropy2 = calculate_entropy_lattice(data2)
data = np.array([entropy1, entropy2])
plot_data_animation_tribes(data, 10, 'Entropy', fig_x = 24, fig_y = 9)

# Temperature
entropy1 = calculate_entropy_lattice(data1)
entropy2 = calculate_entropy_lattice(data2)
data = np.array([entropy1, entropy2])
mass1 = np.array(sum_cells_to_cycles(data1))
mass2 = np.array(sum_cells_to_cycles(data2))

entropy1 = np.array(calculate_entropy2(data1, show_etropy = False))
entropy2 = np.array(calculate_entropy2(data2, show_etropy = False))
dm1 = mass1[1:-1] - mass1[0:-2]
dm2 = mass2[1:-1] - mass2[0:-2]
ds1 = entropy1[1:-1] - entropy1[0:-2]
ds2 = entropy2[1:-1] - entropy2[0:-2]
t1 = dm1 / ds1
t2 = dm2 / ds2

show_tribes(dm1, dm2, 'Derivative of mass with respect to time', 12, 8)
show_tribes(ds1, ds2, 'Derivative of entropy with respect to time', 12, 8)
show_tribes(t1, t2, 'Temperature', 12, 8)

# Temperature
temperatures1 = calculate_temperature_lattice(data1)
temperatures2 = calculate_temperature_lattice(data2)
data = np.array([temperatures1, temperatures2])
plot_data_animation_tribes(data, 10, 'Temperature', fig_x = 24, fig_y = 9)

"""# System z dwoma barierami z poruszającą się barierą"""

name = 'probability_r201_c200_barriers2'
data = load_data_3d(name + '.txt')

# Mass
mass = sum_cells_to_cycles(data)
plot2d_new2(range(len(mass)), np.array(mass), 'Cycle', 'Mass', 'Mass')

# Entropy
calculate_entropy2(data, 12, 8)

# Probability
plot_data_animation(data, 10, 'Probability', name, 24, 9)

# Probability average
mass_average = average(data, 5, 5)
plot_data_animation(mass_average, 10, 'Probability', name, 24, 9)

# Entropy
entropy = calculate_entropy_lattice(data)
plot_data_animation(entropy, 10, 'Entropy', name, 24, 9)

# Entropy average
entropy_average = average(data, 5, 5)
plot_data_animation(entropy_average, 10, 'Entropy', name, 24, 9)

# Mass vs Entropy
mass_entropy(data, 12, 8)

# Temperature
temperature = calculate_temperature_lattice(data)
calculate_temperature(data, 16, 16)

# Temperature
plot_data_animation(temperature, 10, 'Temperature', name, 24, 9)

# Temperature average
temperature_average = average(temperature, 5, 5)
plot_data_animation(temperature_average, 10, 'Temperature', name, 24, 9)

"""# System otwarty z poruszającą się barierą"""

name = 'probability_r201_c200_barriers'
data = load_data_3d(name + '.txt')

# Mass
mass = sum_cells_to_cycles(data)
plot2d_new2(range(len(mass)), np.array(mass), 'Cycle', 'Mass', 'Mass')

# Entropy
calculate_entropy2(data, 12, 8)

# Probability
plot_data_animation(data, 10, 'Probability', name, 24, 9)

# Probability average
mass_average = average(data, 5, 5)
plot_data_animation(mass_average, 10, 'Probability', name, 24, 9)

# Entropy
entropy = calculate_entropy_lattice(data)
plot_data_animation(entropy, 10, 'Entropy', name, 24, 9)

# Entropy average
entropy_average = average(data, 5, 5)
plot_data_animation(entropy_average, 10, 'Entropy', name, 24, 9)

# Mass vs Entropy
mass_entropy(data, 12, 8)

# Temperature
temperature = calculate_temperature_lattice(data)
calculate_temperature(data, 16, 16)

# Temperature
plot_data_animation(temperature, 10, 'Temperature', name, 24, 9)

# Temperature average
temperature_average = average(temperature, 5, 5)
plot_data_animation(temperature_average, 10, 'Temperature', name, 24, 9)

"""# System otwarty z barierą poruszającą się w prawo i w lewo"""

name = 'probability_r100_c400'
data = load_data_3d(name + '.txt')

# Mass
mass = sum_cells_to_cycles(data)
plot2d_new2(range(len(mass)), np.array(mass), 'Cycle', 'Mass', 'Mass')

# Entropy
calculate_entropy2(data, 12, 8)

# Probability
plot_data_animation(data, 10, 'Probability', name, 24, 9)

# Probability average
mass_average = average(data, 5, 5)
plot_data_animation(mass_average, 10, 'Probability', name, 24, 9)

# Entropy
entropy = calculate_entropy_lattice(data)
plot_data_animation(entropy, 10, 'Entropy', name, 24, 9)

# Entropy average
entropy_average = average(data, 5, 5)
plot_data_animation(entropy_average, 10, 'Entropy', name, 24, 9)

# Mass vs Entropy
mass_entropy(data, 12, 8)

# Temperature
temperature = calculate_temperature_lattice(data)
calculate_temperature(data, 16, 16)

# Temperature
plot_data_animation(temperature, 10, 'Temperature', name, 24, 9)

# Temperature average
temperature_average = average(temperature, 5, 5)
plot_data_animation(temperature_average, 10, 'Temperature', name, 24, 9)