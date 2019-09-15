<main>
	<?php
	if (isset($DATA['message'])): ?>
	<p><?= Security::escape($DATA['message']); ?></p>
	<?php endif; ?>

	<form method="POST">
		<label>
			<span>Username:</span>
			<input type="text" name="username" required>
		</label>
		<label>
			<span>Password:</span>
			<input type="password" name="password" required>
		</label>
		<button type="submit">Log in</button>
	</form>
</main>
