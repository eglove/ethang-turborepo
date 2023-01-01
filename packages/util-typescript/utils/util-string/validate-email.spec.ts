import { isValidEmail } from './validate-email';

describe('Valid Email', () => {
  it('should return true for correct emails', () => {
    const emails = [
      'simple@example.com',
      'very.common@example.com',
      'disposable.style.email.with+symbol@example.com',
      'other.email-with-hyphen@example.com',
      'fully-qualified-domain@example.com',
      'user.name+tag+sorting@example.com',
      'user.name@example.com',
      'x@example.com',
      'example-indeed@strange-example.com',
      'test/test@test.com',
      'admin@mailserver1',
      'example@s.example',
      '" "@example.org',
      '"john..doe"@example.org',
      'mailhost!username@example.org',
      'user%example.com@example.org',
      'user-@example.org',
      'postmaster@[123.123.123.123]',
      'postmaster@[IPv6:2001:0db8:85a3:0000:0000:8a2e:0370:7334]',
    ];

    for (const email of emails) {
      expect(isValidEmail(email)).toBe(true);
    }
  });

  it('should return false for incorrect emails', () => {
    const emails = [
      'Abc.example.com',
      'A@b@c@example.com',
      'a"b(c)d,e:f;g<h>i[j\\k]l@example.com',
      'just"not"right@example.com',
      'this is"not\\allowed@example.com',
      'this\\ still\\"not\\\\allowed@example.com',
      '1234567890123456789012345678901234567890123456789012345678901234+x@example.com',
      'i_like_underscore@but_its_not_allowed_in_this_part.example.com',
      'QA[icon]CHOCOLATE[icon]@test.com',
    ];

    for (const email of emails) {
      expect(isValidEmail(email)).toBe(false);
    }
  });
});
