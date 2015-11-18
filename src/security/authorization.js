export function checkRules(rules, user, subject) {
  for (var rule of rules) {
    let rulePassed = rule.check(user, subject);

    if (!rulePassed) {
      throw new Error(rule.errorMessage);
    }
  }
}
