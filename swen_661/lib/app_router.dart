import 'package:go_router/go_router.dart';

import 'screens/login_screen.dart';
import 'screens/reset_password_screen.dart';
import 'screens/home_screen.dart';
import 'screens/appointments_screen.dart';
import 'screens/medications_screen.dart';
import 'screens/messages_screen.dart';
import 'screens/doctor_messaging.dart';
import 'screens/profile_screen.dart';

final GoRouter appRouter = GoRouter(
  initialLocation: '/login',
  routes: [
    GoRoute(path: '/login', builder: (context, state) => const LoginScreen()),

    GoRoute(
      path: '/reset-password',
      builder: (context, state) => const ResetPasswordScreen(),
    ),

    GoRoute(path: '/home', builder: (context, state) => const HomeScreen()),

    GoRoute(
      path: '/appointments',
      builder: (context, state) => const AppointmentsScreen(),
    ),

    GoRoute(
      path: '/medications',
      builder: (context, state) => const MedicationsScreen(),
    ),

    GoRoute(
      path: '/messages',
      builder: (context, state) => const MessagesScreen(),
    ),

    GoRoute(
      path: '/doctor-messaging',
      builder: (context, state) => DoctorMessagingScreen(),
    ),

    GoRoute(
      path: '/profile',
      builder: (context, state) => const ProfileScreen(),
    ),
  ],
);
