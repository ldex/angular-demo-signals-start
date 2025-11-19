import { Component } from '@angular/core';


interface DashboardStat {
  label: string;
  value: string | number;
  change: number;
  icon: string;
}

interface RecentActivity {
  id: number;
  action: string;
  user: string;
  timestamp: string;
}

@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent {
  protected readonly Math = Math;

  stats: DashboardStat[] = [
    { label: 'Total Products', value: 156, change: 12.5, icon: '📦' },
    { label: 'Active Users', value: 2489, change: 8.2, icon: '👥' },
    { label: 'Revenue', value: '$45,678', change: -2.4, icon: '💰' },
    { label: 'Orders', value: 324, change: 15.8, icon: '🛍️' }
  ];

  recentActivity: RecentActivity[] = [
    { id: 1, action: 'Product Created', user: 'John Doe', timestamp: '2024-02-20 14:30' },
    { id: 2, action: 'Order Fulfilled', user: 'Jane Smith', timestamp: '2024-02-20 13:45' },
    { id: 3, action: 'User Registered', user: 'Mike Johnson', timestamp: '2024-02-20 12:15' },
    { id: 4, action: 'Product Updated', user: 'Sarah Wilson', timestamp: '2024-02-20 11:30' },
    { id: 5, action: 'Order Cancelled', user: 'Tom Brown', timestamp: '2024-02-20 10:45' }
  ];
}