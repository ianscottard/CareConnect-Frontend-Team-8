import 'package:flutter_riverpod/flutter_riverpod.dart';

class MedicationNotifier extends Notifier<Set<String>> {
  @override
  Set<String> build() {
    return {};
  }

  void markAsTaken(String medicationName) {
    state = {...state, medicationName};
  }

  void resetMedication(String medicationName) {
    state = {...state}..remove(medicationName);
  }
}

final medicationTakenProvider =
    NotifierProvider<MedicationNotifier, Set<String>>(MedicationNotifier.new);
