import 'package:flutter/material.dart';

void main() {
  runApp(const HelloWorldApp());
}

class HelloWorldApp extends StatelessWidget {
  const HelloWorldApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
          appBar: AppBar(
            title: const Text('Hello World from Flutter!'),
          ),
          body : const Center(
            child: Text('Hello, World! This is CareConnect testing!'),
          ),
        )
    );
  }
}