---
markdown-version: v1
tool-type: instructional-lab
branch: lab-7795-instruction
version-history-start-date: "2023-07-28T15:34:02Z"
audio-timestamp-of-request-to-generate-wav: "2023-11-22T17:37:21Z"
audio-file-url: https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/171/labs/Infrastructure_Automation_with_For_Loops_in_Terraform.md.wav
title: Terraform Loops
language: English
topic: Automation
publishDate: 2020-03-04 00:00:00
img: /assets/stock-3.webp
img_alt: Pearls of silky soft white cotton, bubble up under vibrant lighting
description: |
  Infrastructure Automation with For Loops in Terraform
tags:
  - Automation
  - Terraform
  - Ansible
industries:
  - Information Technology
author:
  - "@type": Person
    name: Lionel Tchami Nfada
    url: https://author.skills.network/instructors/lionel_tchami_nfada
    jobTitle: Lead Instructor
dateCreated: "2023-07-28T15:33:57Z"
dateModified: "2023-07-28T15:51:17Z"
image: https://author-workbench-prod.s3.us.cloud-object-storage.appdomain.cloud/2ppgywmw6uhv78ar5c8cajqo8ing
---

In the recent years, most infrastructures have been slowly and totally moved from onsite servers over to the cloud. With this change, there has also been the need for creating infrastructures in the cloud.

One tool that has really helped in building our cloud infrastructure is Ansible even though it is a Configuration Management tool. However we recently switched over to Terraform and so far it has proven itself as being much better than expected. Today we will be talking about Terraform For Loops.

Terraform is the most popular infrastructure as a code tool which allows you to define and manage any and all cloud (AWS, GCP, Azure, Kubernetes, etc.) resources.

Like any language, Terraform also works with `for loops`. It was quite confusing when we started working with it. I recently decided to write about how we finally figured out how it works.

Like `for Loops` in any coding language, the `for loops` in Terraform provide a great mechanism for iterating over any list of items and accomplishing some actions and/or creating resources dynamically.

This functionality enables efficient and flexible infrastructure provisioning, which reduces manual work while increasing scalability.

In this post, I will walk you through the syntax and benefits of for loops in Terraform, providing practical insights and examples to help you properly exploit their power.

## Understanding For Loops in Terraform

To utilise for loops, first define a variable that represents the list of things you wish to iterate over, then control the iteration with the for_each or count expressions.

The count statement is appropriate for iterating a fixed number of times, whereas the for_each expression is very beneficial for dealing with a dynamic set of elements, such as a map or set.

But what do I mean by "`map`" and "`set`"?

The `for_each` map is similar to Python dictionaries in that variables have attributes with keys translated to values, and the set is comparable to a list in that it is an ordered collection of objects.

Here's an example of Terraform code that shows how to use `for_each` and count expressions in different scenarios:

```hcl
# Dynamic set of items using for_each
variable "dynamic_items" {
  type    = map(string)
  default = {
    ubuntu_server = "ami-01dd271720c1ba44f젊    windows_server = "ami-0274fd9e256dea7b1젊    rhel_server = "ami-013d87f7217614e10젊  }
}

resource "aws_instance" "servers" {
  for_each = var.dynamic_items

  ami           = each.value
  instance_type = "t2.micro"

  tags = {
    Name = each.key
  }
}
```

Enter fullscreen mode Exit fullscreen mode

The `for_each`expression is used in this example to generate AWS EC2 instances depending on the dynamic set of items given in the `dynamic_items`variable. Each map entry contains a server name and its associated type - machine image (`ami`). For each server in the map, an `aws_instance`resource will be generated, and the instance tags will be set using the `for_each`iterator.

The `count`expression, on the other hand, is used to iteratively construct AWS EBS volumes based on the fixed count given in the `fixed_count`variable. The `aws_ebs_volume`resource will be generated three times, each with a unique name supplied via the `count.index` variable (DataVolume-1, DataVolume-2, DataVolume-3).

```hcl
# Fixed number of iterations using count
variable "fixed_count" {
  type    = number
  default = 3
}

resource "aws_ebs_volume" "data_volume" {
  count          = var.fixed_count
  availability_zone = "us-west-1a"
  size           = 100
  volume_type    = "gp2"

  tags = {
    Name = "DataVolume-${count.index + 1}"
  }
}
```

Instead of manually specifying many resource blocks or modules, you can dynamically produce resources using for loops, which avoids the need for repetitious code and decreases the likelihood of errors.

They also provide for easy scalability, allowing you to adapt to changing requirements and handle larger infrastructure installations with ease. For loops provide a straightforward way for scaling your infrastructure, whether you need to launch numerous EC2 instances, provision different subnets, or configure multiple security groups.

In addition to automation, they offer conditional statements, which allow you to control the iteration process and make dynamic decisions based on specified criteria by incorporating if conditions and logical expressions into for loops.

## Best Practices

Maintaining code clarity and organisation when dealing with for loops in Terraform is critical for long-term maintainability and collaboration. Consider the following best practises:

- _Use descriptive variable names_: To improve code readability, use descriptive variable names. This makes it easy for others (and you) to comprehend the loop's purpose and context.
- _Include comments_: Include comments in your code to explain and describe the intent behind the for loop. This assists others in understanding the logic and goal of the repetition.
- _Indentation and formatting_: Always use proper indentation and formatting when writing for loops.
- _Keep loop complexity to a minimum_: Avoid loops with nested iterations or lengthy conditional expressions. Code that is overly complex might be difficult to understand and maintain.
- _Test and validate_: Thoroughly test and validate the functionality of for loops before deploying them in production systems.

## Finally

To summarise, Terraform's `for loops` enable you to automate resource creation and configuration while allowing flexibility via conditional expressions. Furthermore, the use of conditional statements enables you to react to various conditions, making your infrastructure settings more dynamic and adaptive to changing requirements.
