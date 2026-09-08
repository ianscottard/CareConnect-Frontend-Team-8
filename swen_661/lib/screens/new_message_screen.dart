import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class NewMessageScreen extends StatelessWidget {
  const NewMessageScreen({super.key});

  static const Color careConnectBlue = Color(0xFF2C67BA);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        leading: Semantics(
          label: 'Back to messages',
          button: true,
          child: IconButton(
            icon: const Icon(Icons.arrow_back, color: Colors.black),
            onPressed: () {
              context.go('/messages');
            },
          ),
        ),
        title: const Text(
          'New Message',
          style: TextStyle(
            color: careConnectBlue,
            fontSize: 22,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                'To',
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
              ),
              const SizedBox(height: 8),
              Semantics(
                label: 'Select message recipient',
                textField: true,
                child: const TextField(
                  decoration: InputDecoration(
                    hintText: 'Enter provider name',
                    border: OutlineInputBorder(),
                  ),
                ),
              ),
              const SizedBox(height: 24),
              const Text(
                'Message',
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
              ),
              const SizedBox(height: 8),
              Semantics(
                label: 'Enter message',
                textField: true,
                child: const TextField(
                  maxLines: 6,
                  decoration: InputDecoration(
                    hintText: 'Type your message here',
                    border: OutlineInputBorder(),
                  ),
                ),
              ),
              Semantics(
                label: 'Add attachment',
                button: true,
                child: TextButton.icon(
                  onPressed: () {
                    // Attachment functionality can be connected later.
                  },
                  icon: const Icon(Icons.attach_file, color: careConnectBlue),
                  label: const Text(
                    'Add attachment',
                    style: TextStyle(
                      color: careConnectBlue,
                      fontSize: 16,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 16),
              const SizedBox(height: 24),
              SizedBox(
                width: double.infinity,
                height: 48,
                child: Semantics(
                  label: 'Send new message',
                  button: true,
                  child: ElevatedButton(
                    onPressed: () {
                      context.go('/messages');
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: careConnectBlue,
                      foregroundColor: Colors.white,
                    ),
                    child: const Text(
                      'Send Message',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
