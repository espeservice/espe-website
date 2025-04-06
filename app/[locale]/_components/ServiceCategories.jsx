'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const categories = [
  {
    icon: '🏠',
    name: 'Home Services',
    description: 'Cleaning, Repairs, Maintenance',
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    icon: '🔧',
    name: 'Technical Services',
    description: 'Plumbing, Electrical, HVAC',
    color: 'from-green-500/20 to-green-600/20'
  },
  {
    icon: '🚗',
    name: 'Transportation',
    description: 'Rides, Delivery, Moving',
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    icon: '💼',
    name: 'Professional',
    description: 'Legal, Financial, Consulting',
    color: 'from-orange-500/20 to-orange-600/20'
  }
];

export default function ServiceCategories() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary mb-4"
        >
          {t('services.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {t('services.subtitle')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="relative overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
              <div className="relative p-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
