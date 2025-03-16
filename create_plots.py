import matplotlib.pyplot as plt

# Data
amounts = [1600, 25503, 1e9, 49.5e9]
labels = ['Per-sec. interest', 'Per-person debt','€1 billion', 'Yearly interest']

plt.figure(figsize=(10, 6))
plt.bar(labels, amounts, color=['orange', 'orange', '#03A9F4', '#ff0000'])

plt.ylabel('Amount (€)', fontsize=20)
plt.xticks(fontsize=15)
plt.yticks(fontsize=15)
plt.tight_layout()
plt.savefig('bar_chart_linear.png', dpi=500)


import matplotlib.pyplot as plt

# Data
amounts = [1600, 25503, 1e9, 49.5e9, 500e9]
labels = ['Per-sec. interest', 'Per-person debt','€1 billion', 'Yearly interest', 'Planned debt']

# Create bar chart
plt.figure(figsize=(12, 8))
plt.bar(labels, amounts, color=['orange', 'orange', '#03A9F4', '#ff0000', '#ff0000'])

# Add title and labels
plt.ylabel('Amount (€)', fontsize=20)
plt.xticks(fontsize=15)
plt.yticks(fontsize=15)
plt.yscale('log')

plt.tight_layout()
plt.savefig('bar_chart_log.png', dpi=500)


