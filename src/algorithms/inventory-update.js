/**
 * Inventory Update Algorithm
 *
 * Compares and updates inventory stored in a 2D array against a second 2D array
 * of fresh delivery. Updates current existing inventory item quantities and adds
 * new items. Returns inventory array sorted alphabetically by item name.
 *
 * Algorithm approach:
 * 1. Create a Map for efficient O(1) lookups of existing items
 * 2. Process current inventory items first
 * 3. Process new delivery items (update existing or add new)
 * 4. Convert back to array and sort alphabetically
 *
 * Time Complexity: O(n log n) due to sorting
 * Space Complexity: O(n) for the Map storage
 *
 * @param {Array<Array>} arr1 - Current inventory [[quantity, name], ...]
 * @param {Array<Array>} arr2 - New delivery [[quantity, name], ...]
 * @returns {Array<Array>} Updated inventory sorted alphabetically by item name
 *
 * @example
 * updateInventory([[21, "Bowling Ball"]], [[67, "Bowling Ball"]])
 * // Returns: [[88, "Bowling Ball"]]
 *
 * @example
 * updateInventory([[1, "Apple"]], [[1, "Banana"]])
 * // Returns: [[1, "Apple"], [1, "Banana"]]
 */
function updateInventory(arr1, arr2) {
  // Use Map for efficient item lookups and updates
  const inventoryMap = new Map();

  // Process current inventory
  for (const [quantity, itemName] of arr1) {
    inventoryMap.set(itemName, quantity);
  }

  // Process new delivery items
  for (const [quantity, itemName] of arr2) {
    if (inventoryMap.has(itemName)) {
      // Update existing item quantity
      inventoryMap.set(itemName, inventoryMap.get(itemName) + quantity);
    } else {
      // Add new item
      inventoryMap.set(itemName, quantity);
    }
  }

  // Convert back to array format and sort alphabetically by item name
  return Array.from(inventoryMap.entries())
    .map(([itemName, quantity]) => [quantity, itemName])
    .sort((a, b) => a[1].localeCompare(b[1]));
}

export default updateInventory;
