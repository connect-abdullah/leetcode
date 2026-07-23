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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    function height(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }

        let left = height(node.left);
        let right = height(node.right);

        diameter = Math.max(diameter, left + right);

        return 1 + Math.max(left, right);
    }

    height(root);

    return diameter;
}