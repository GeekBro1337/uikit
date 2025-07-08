<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-6xl mx-auto">

      <!-- Alerts Demo -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Alerts with Custom Colors</h2>
        <div class="space-y-4">
          <UAlert
            title="Error Alert"
            description="This is an error message using the custom red color (#EF0009)"
            color="error"
            icon="i-lucide-alert-circle"
          />
          <UAlert
            title="Warning Alert"
            description="This is a warning message using the custom amber color (#BB4D00)"
            color="warning"
            icon="i-lucide-alert-triangle"
          />
          <UAlert
            title="Info Alert"
            description="This is an info message using the custom blue color (#1447E6)"
            color="info"
            icon="i-lucide-info"
          />
          <UAlert
            title="Success Alert"
            description="This is a success message using the custom emerald color (#007A55)"
            color="success"
            icon="i-lucide-check-circle"
          />
        </div>
      </section>

      <!-- Badges Demo -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Badges with Custom Colors</h2>
        <div class="flex flex-wrap gap-4">
          <UBadge color="primary" label="Brand Primary" />
          <UBadge color="secondary" label="Brand Secondary" />
          <UBadge color="primary" label="Primary" />
          <UBadge color="error" label="Error" />
          <UBadge color="warning" label="Warning" />
          <UBadge color="info" label="Info" />
          <UBadge color="success" label="Success" />
          <UBadge color="neutral" label="Neutral" />
        </div>
      </section>
    </div>
  </div>
</template>
