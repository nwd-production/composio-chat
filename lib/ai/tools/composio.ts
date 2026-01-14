import composio from '@/lib/services/composio';

/**
 * Fetches Composio tools for a user based on enabled toolkits
 * This is used specifically for AI/LLM tool integration
 */
export async function getComposioTools(userId: string, toolkitSlugs: string[]) {
  if (!toolkitSlugs || toolkitSlugs.length === 0) {
    console.log('No toolkits enabled, skipping Composio tools fetch');
    return {};
  }

  try {
    console.log(`Fetching Composio tools for user ${userId} with toolkits:`, toolkitSlugs);
    const tools = await composio.tools.get(userId, {
      toolkits: toolkitSlugs,
    });
    console.log(`Successfully fetched ${Object.keys(tools || {}).length} Composio tools`);
    return tools || {};
  } catch (error) {
    console.error('Failed to fetch Composio tools:', error);
    console.error('Error details:', {
      userId,
      toolkitSlugs,
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
      errorStack: error instanceof Error ? error.stack : undefined,
    });
    return {};
  }
}
