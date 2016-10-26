package security;

import java.security.Key;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.impl.crypto.MacProvider;

@Component
public class SecretKeyGenerator {

	
private final Key SECRET_KEY = MacProvider.generateKey();
	
	public Key getSecretKey() {
		return SECRET_KEY;
	}
	
}
