<script setup>
	import { ref, watch } from "vue";

	const props = defineProps({
		term: Object,
		isOpen: Boolean,
	});

	const emit = defineEmits(["close"]);

	const handleKeydown = (e) => {
		if (e.key === "Escape") {
			emit("close");
		}
	};

	watch(
		() => props.isOpen,
		(open) => {
			if (open) {
				document.addEventListener("keydown", handleKeydown);
				document.body.style.overflow = "hidden";
			} else {
				document.removeEventListener("keydown", handleKeydown);
				document.body.style.overflow = "";
			}
		},
	);
</script>

<template>
	<Teleport to="body">
		<Transition name="glossary-fade">
			<div
				v-if="isOpen"
				class="glossary-overlay"
				@click="emit('close')"
			/>
		</Transition>
		<Transition name="glossary-slide">
			<div
				v-if="isOpen"
				class="glossary-panel"
			>
				<header class="glossary-header">
					<h3 class="glossary-term">{{ term?.term }}</h3>
					<button
						class="glossary-close"
						@click="emit('close')"
						aria-label="Close glossary panel"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<line
								x1="18"
								y1="6"
								x2="6"
								y2="18"
							></line>
							<line
								x1="6"
								y1="6"
								x2="18"
								y2="18"
							></line>
						</svg>
					</button>
				</header>
				<div class="glossary-content">
					<p>{{ term?.definition }}</p>
					<a
						:href="`/glossary#${term?.id}`"
						class="glossary-link"
						@click="emit('close')"
					>
						View in glossary
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<line
								x1="7"
								y1="17"
								x2="17"
								y2="7"
							></line>
							<polyline points="7 7 17 7 17 17"></polyline>
						</svg>
					</a>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<style scoped>
	.glossary-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(4px);
		z-index: 9998;
		pointer-events: auto;
	}

	.glossary-panel {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: min(400px, 90vw);
		background: var(--vp-c-bg);
		border-left: 1px solid var(--vp-c-divider);
		z-index: 9999;
		display: flex;
		flex-direction: column;
		box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
		pointer-events: auto;
	}

	.glossary-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem 1.5rem;
		border-bottom: 1px solid var(--vp-c-divider);
	}

	.glossary-term {
		margin: 0;
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--vp-c-text-1);
	}

	.glossary-close {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border: none;
		border-radius: 6px;
		background: transparent;
		color: var(--vp-c-text-2);
		cursor: pointer;
		transition: all 0.2s;
	}

	.glossary-close:hover {
		background: var(--vp-c-gray-soft);
		color: var(--vp-c-text-1);
	}

	.glossary-content {
		padding: 1.5rem;
		flex: 1;
		overflow-y: auto;
	}

	.glossary-content p {
		margin: 0;
		line-height: 1.7;
		color: var(--vp-c-text-1);
	}

	.glossary-link {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		margin-top: 1.25rem;
		font-size: 0.875rem;
		color: var(--vp-c-brand-1);
		text-decoration: none;
		transition: color 0.2s;
	}

	.glossary-link:hover {
		color: var(--vp-c-brand-2);
	}

	.glossary-fade-enter-active,
	.glossary-fade-leave-active {
		transition: opacity 0.2s ease;
	}

	.glossary-fade-enter-from,
	.glossary-fade-leave-to {
		opacity: 0;
	}

	.glossary-slide-enter-active,
	.glossary-slide-leave-active {
		transition: transform 0.3s ease;
	}

	.glossary-slide-enter-from,
	.glossary-slide-leave-to {
		transform: translateX(100%);
	}
</style>
