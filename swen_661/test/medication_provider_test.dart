import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:swen_661/providers/medication_provider.dart';

void main() {
  test('marks a medication as taken', () {
    final container = ProviderContainer();

    expect(container.read(medicationTakenProvider), isEmpty);

    container.read(medicationTakenProvider.notifier).markAsTaken('Lisinopril');

    expect(container.read(medicationTakenProvider), contains('Lisinopril'));

    container.dispose();
  });

  test('resets a medication from taken status', () {
    final container = ProviderContainer();

    container.read(medicationTakenProvider.notifier).markAsTaken('Lisinopril');

    expect(container.read(medicationTakenProvider), contains('Lisinopril'));

    container
        .read(medicationTakenProvider.notifier)
        .resetMedication('Lisinopril');

    expect(
      container.read(medicationTakenProvider),
      isNot(contains('Lisinopril')),
    );

    container.dispose();
  });
}
