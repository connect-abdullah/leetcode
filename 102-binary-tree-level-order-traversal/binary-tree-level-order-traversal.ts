/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    // If the tree is empty, return an empty 2D array
    if (root === null) {
        return [];
    }

    // Stores the final result
    // Example: [[3], [9, 20], [15, 7]]
    const result: number[][] = [];

    // Start the queue with the root node
    const queue: TreeNode[] = [root];

    // Continue while there are nodes waiting in the queue
    while (queue.length > 0) {

        // Number of nodes currently in the queue
        // All of these nodes belong to the current level
        const levelSize = queue.length;

        // Stores values of nodes at the current level
        const currentLevel: number[] = [];

        // Process only the nodes that were already in the queue
        // Their children will be processed in the next level
        for (let i = 0; i < levelSize; i++) {

            // Remove the first node from the queue
            const node = queue.shift()!;

            // Add the node's value to the current level
            currentLevel.push(node.val);

            // Add the left child to the queue
            // It will be processed in the next level
            if (node.left !== null) {
                queue.push(node.left);
            }

            // Add the right child to the queue
            // It will also be processed in the next level
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        // Add the completed level to the final result
        result.push(currentLevel);
    }

    // Return all levels
    return result;
}