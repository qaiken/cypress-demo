IP        ?= $(shell ipconfig getifaddr en0)
DISPLAY   := $(IP):0

export

.PHONY: dev e2e e2e-interactive clean

DEV_DC = docker-compose -f docker-compose.yml

dev:
	$(DEV_DC) up --build

E2E_DC = docker-compose -f docker-compose.yml -f docker-compose.cypress.yml -p e2e

e2e:
	$(E2E_DC) build
	$(E2E_DC) up --exit-code-from cypress

E2E_INTERACTIVE_DC = docker-compose -f docker-compose.yml -f docker-compose.cypress.yml -f docker-compose.cypress-interactive.yml -p e2e-interactive

e2e-interactive:
	open -a XQuartz
	xhost + $(IP)
	$(E2E_INTERACTIVE_DC) build
	$(E2E_INTERACTIVE_DC) up --exit-code-from cypress

clean:
	$(DEV_DC) stop
	$(DEV_DC) rm -f
	$(E2E_DC) stop
	$(E2E_DC) rm -f
	$(E2E_INTERACTIVE_DC) stop
	$(E2E_INTERACTIVE_DC) rm -f
